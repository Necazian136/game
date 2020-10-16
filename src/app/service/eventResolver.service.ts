import {SocketService} from './socket.service';
import {Injectable} from '@angular/core';

@Injectable()
export abstract class EventResolverService {
  socketService: SocketService;

  abstract registerSocketMethods(): void;

  // noinspection TypeScriptAbstractClassConstructorCanBeMadeProtected
  public constructor(socketService: SocketService) {
    this.socketService = socketService;
    this.registerSocketMethods();
  }
}
