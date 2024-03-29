import { parse as parseUUID, v4 as uuidv4 } from 'uuid';
import _sodium from 'libsodium-wrappers';


function encodeSessionHello(
  clientPublicKey: Uint8Array,
  clientUUID: string,
  sessionUUID: string,
): Uint8Array {
  return new Uint8Array([
    ...clientPublicKey,
    ...parseUUID(clientUUID),
    ...parseUUID(sessionUUID),
  ]);
}


function encodeMessage({ source, destination, eventType, eventPayload }: {
  source: string,
  destination: string,
  eventType: string,
  eventPayload: Uint8Array,
}, private_key: Uint8Array): Uint8Array {
  const encoder = new TextEncoder();
  const sodium = _sodium;
  const sourceUUID = parseUUID(source);
  const destinationUUID = parseUUID(destination);
  const eventTypeLength = eventType.length;
  const eventTypeBytes = encoder.encode(eventType);
  const eventTypeLengthBytes = new Uint8Array([0, 0]);
  const eventTypeLengthBytesView = new DataView(eventTypeLengthBytes.buffer);
  eventTypeLengthBytesView.setUint16(0, eventTypeLength);
  return sodium.crypto_sign(new Uint8Array([
    ...sourceUUID,
    ...destinationUUID,
    ...eventTypeLengthBytes,
    ...eventTypeBytes,
    ...eventPayload,
  ]), private_key);
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
  private clientUUID: string;
  private sessionUUID: string;
  private privateKey: Uint8Array;
  private publicKey: Uint8Array;
  private socket: Socket;

  constructor(
    uuid: string,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
  ) {
    this.clientUUID = uuid;
    this.sessionUUID = uuidv4();
    this.privateKey = privateKey;
    this.publicKey = publicKey;
    this.socket = new Socket(this, '/api/v1/socket');
  }

  public async connect() {
    const hello = encodeSessionHello(
      this.publicKey,
      this.clientUUID,
      this.sessionUUID,
    );

    this.socket = await this.socket.connect();
    this.socket.send(hello);

    return this;
  }

  public async send(destination: string, eventType: string, eventPayload: Uint8Array) {
    if (!this.socket.connected) {
      await this.connect();
    }

    this.socket.send(encodeMessage({
      source: this.clientUUID,
      destination,
      eventType,
      eventPayload,
    }, this.privateKey));
  }
}


export class Socket {
  public connected: boolean;
  private client: Client;
  private socket: null | WebSocket;
  private url: string;

  constructor(client: Client, url: string) {
    const l = window.location;
    const protocol = l.protocol === 'https:' ? 'wss:' : 'ws:';
    const host = l.host;
    this.connected = false;
    this.socket = null;
    this.client = client;
    this.url = `${protocol}//${host}${url}`;
  }

  public connect(): Promise<Socket> {
    return new Promise((resolve, reject) => {
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
        resolve(this);
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
    this.connected = false;
    this.socket = null;
  }

  public onError(error: any) {
    console.log('onError', error);
  }
}
