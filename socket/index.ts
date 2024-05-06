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

  public userHandlers: Map<string, ((event: MessageEvent) => void)[]>;
  public groupHandlers: Map<string, ((event: MessageEvent) => void)[]>;
  public sessionHandlers: ((event: MessageEvent) => void)[];

  private socket: null | WebSocket;
  private url: string;
  private iam: IAM;
  private user: null | User;

  constructor(iam: IAM) {
    this.connected = false;
    this.socket = null;
    this.user = null;
    this.iam = iam;
    this.url = DEFAULT_URL;
    this.userHandlers = new Map();
    this.groupHandlers = new Map();
    this.sessionHandlers = [];
  }

  public async connect(): Promise<User> {
    this.user = await this.iam.user.getUser()

    const connected = new Promise((resolve, reject) => {
      const socket = new WebSocket(this.url);
      this.socket = socket;
      socket.binaryType = 'arraybuffer';
      socket.onmessage = this.onMessage.bind(this);
      socket.onclose = this.onClose;
      socket.onerror = reject;
      socket.onopen = () => {
        console.log('websocket connected');
        socket.onerror = this.onError;
        this.connected = true;
        // Send client hello
        const session = this.iam.sessionId;
        const token = this.iam.sessionToken;
        const hello: ClientHello = { user: this.user.id, session, token };
        const helloData = JSON.stringify(hello);
        socket.send(helloData);
        resolve(this);
      };
    });

    await connected;

    return this.user;
  }

  public disconnect() {
    console.log('disconnecting');
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

  public onMessage(event: MessageEvent) {
    const message = JSON.parse(event.data);
    console.log('onMessage', message);
    const recipient = message.recipient;
    if (recipient.user) {
      const handlers = this.userHandlers.get(recipient.user) || [];
      handlers.forEach(handler => handler(event))
    }
    if (recipient.group)
      this.groupHandlers.get(recipient.group)?.forEach(handler => handler(event));
    if (recipient.session)
      this.sessionHandlers.forEach(handler => handler(event));
  }

  public onClose(event: CloseEvent) {
    console.log('onClose', event);
    this.connected = false;
    this.socket = null;
  }

  public onError(error: any) {
    console.log('onError', error);
  }
}
