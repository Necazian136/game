import {ResponseDto} from '../dto/server/response.dto';

export class SocketService {
    ws: WebSocket;
    events = {};

    constructor() {
        this.ws = new WebSocket('ws://localhost:8080');
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
        if (this.on[response.event] !== undefined) {
            this.on[response.event](response);
        }
    }
}
