import { parse as parseUUID, v4 as uuidv4 } from 'uuid';
import _sodium from 'libsodium-wrappers';


function encodeClientHello(senderUUID: string, public_key: Uint8Array): Uint8Array {
  const sender = parseUUID(senderUUID);
  return new Uint8Array([...sender, ...public_key]);
}


export async function getOrCreateClient(): Promise<Client> {
  const localStoragePrivateKey = localStorage.getItem('private_key')
  const localStoragePublicKey = localStorage.getItem('public_key')
  const localStorageUUID = localStorage.getItem('uuid')

  if (localStorageUUID && localStoragePublicKey && localStoragePrivateKey) {
    await _sodium.ready;
    const sodium = _sodium;

    const private_key = sodium.from_base64(localStoragePrivateKey,
                                           sodium.base64_variants.ORIGINAL);
    const public_key = sodium.from_base64(localStoragePublicKey,
                                          sodium.base64_variants.ORIGINAL);
    const uuid = localStorageUUID;

    return new Client(uuid, public_key, private_key);
  } else {
    await _sodium.ready;
    const sodium = _sodium;

    const keypair = sodium.crypto_sign_keypair();

    const private_key = keypair.privateKey;
    const public_key = keypair.publicKey;
    const uuid = uuidv4();

    localStorage.setItem('private_key', sodium.to_base64(
      private_key, sodium.base64_variants.ORIGINAL));
    localStorage.setItem('public_key', sodium.to_base64(
      public_key, sodium.base64_variants.ORIGINAL));
    localStorage.setItem('uuid', uuid);

    return new Client(uuid, public_key, private_key);
  }
}


export class Client {
  private private_key: Uint8Array;
  private public_key: Uint8Array;
  private uuid: string;
  private socket: Socket;

  constructor(
    uuid: string,
    public_key: Uint8Array,
    private_key: Uint8Array,
  ) {
    this.private_key = private_key;
    this.public_key = public_key;
    this.uuid = uuid;
    this.socket = new Socket(this, '/api/v1/socket');
  }

  public async connect() {
    console.log('connect');
    this.socket = await this.socket.connect();
    console.log('connected');
    this.socket.send(encodeClientHello(this.uuid, this.public_key));
    console.log('sent hello');
    return this;
  }
}


export class Socket {
  private client: Client;
  private socket: null | WebSocket;
  private url: string;

  constructor(client: Client, url: string) {
    const l = window.location;
    const protocol = l.protocol === 'https:' ? 'wss:' : 'ws:';
    const host = l.host;
    this.socket = null;
    this.client = client;
    this.url = `${protocol}//${host}${url}`;
    // this.url = 'ws://localhost:8080/api/v1/socket';
  }

  public connect(): Promise<Socket> {
    return new Promise((resolve, reject) => {
      const socket = new WebSocket(this.url);
      console.log('websocket connecting to', this.url);
      this.socket = socket;
      socket.binaryType = 'arraybuffer';
      socket.onmessage = this.onMessage;
      socket.onclose = this.onClose;
      socket.onerror = reject;

      // set up timer to periodically show status
      const timer = setInterval(() => {
        console.log('websocket status', socket.readyState);
      }, 1000);

      socket.onopen = () => {
        console.log('websocket connected');
        socket.onerror = this.onError;
        resolve(this);
        clearInterval(timer);
      };
    });
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
    console.log('onClose');
  }

  public onError(error: any) {
    console.log('onError', error);
  }
}
