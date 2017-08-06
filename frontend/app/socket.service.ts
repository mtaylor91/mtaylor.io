import { Injectable } from '@angular/core';
import { Socket, Channel } from 'phoenix';


@Injectable()
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = new Socket("/socket", {params: {}});
    this.socket.connect();
  }

  channel(name, params): Channel {
    return this.socket.channel(name, params);
  }
}
