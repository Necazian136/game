import {Injectable} from '@angular/core';
import {EventResolverService} from './eventResolver.service';
import {ResponseDto} from '../dto/server/response.dto';
import {SocketService} from './socket.service';
import {GridDto} from '../dto/grid/grid.dto';

@Injectable()
export class MapService extends EventResolverService {
  grid: GridDto;

  constructor(grid: GridDto, socketService: SocketService) {
    super(socketService);
    this.grid = grid;
  }

  getGrid(): GridDto {
    return this.grid;
  }

  registerSocketMethods(): void {
    this.socketService.on('map', (response: ResponseDto) => {
      this.grid.initMap(response.data.tiles, response.data.objects);
    });
  }
}
