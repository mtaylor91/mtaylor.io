import IAM, { User } from 'iam-mtaylor-io-js';
import { parse as parseUUID, v4 as uuidv4 } from 'uuid';
import sodium from 'libsodium-wrappers-sumo';

const DEFAULT_URL = "wss://events.mtaylor.io";


export interface ClientHello {
  user: string;
  session: string;
  token: string;
}


export class Socket {
  public connected: boolean;
  private socket: null | WebSocket;
  private url: string;
  private iam: IAM;

  constructor(iam: IAM) {
    this.connected = false;
    this.socket = null;
    this.url = DEFAULT_URL;
    this.iam = iam;
  }

  public async connect(): Promise<User> {
    const user = await this.iam.user.getUser()

    const connected = new Promise((resolve, reject) => {
      const socket = new WebSocket(this.url);
      this.socket = socket;
      socket.binaryType = 'arraybuffer';
      socket.onmessage = this.onMessage;
      socket.onclose = this.onClose;
      socket.onerror = reject;
      socket.onopen = () => {
        console.log('websocket connected');
        socket.onerror = this.onError;
        this.connected = true;
        // Send client hello
        const session = this.iam.sessionId;
        const token = this.iam.sessionToken;
        const hello: ClientHello = { user: user.id, session, token };
        const helloData = JSON.stringify(hello);
        socket.send(helloData);
        resolve(this);
      };
    });

    await connected;

    return user;
  }

  public disconnect() {
    if (this.socket) {
      this.socket.close();
    }
  }

  public send(data: any) {
    if (!this.socket) {
      throw new Error('Socket is not connected');
    }

    this.socket.send(data);
  }

  public onOpen() {
    console.log('onOpen');
  }

  public onMessage(event: MessageEvent) {
    console.log('onMessage', event.data);
  }

  public onClose() {
    this.connected = false;
    this.socket = null;
  }

  public onError(error: any) {
    console.log('onError', error);
  }
}
