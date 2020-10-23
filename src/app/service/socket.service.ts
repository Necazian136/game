import {ResponseDto} from '../dto/server/response.dto';
import {Injectable} from '@angular/core';

@Injectable()
export class SocketService {
  ws: WebSocket;
  events = {};

  constructor() {
    this.ws = new WebSocket('ws://172.16.2.105:8080');
    this.ws.onopen = () => {
      this.ws.onmessage = (event) => {
        this.processMessage(event.data);
      };
    };
  }

  send(message: string): void {
    this.ws.send(message);
  }

  on(event: string, callback: object): void {
    this.events[event] = callback;
  }

  processMessage = (msg): void => {
    const response = new ResponseDto(msg);
    if (this.events[response.event] !== undefined) {
      this.events[response.event](response);
    }
  }
}
