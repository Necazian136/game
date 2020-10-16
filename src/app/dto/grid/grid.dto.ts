import {TileDto} from '../tile/tile.dto';
import {Injectable} from '@angular/core';
import {SpriteService} from '../../service/sprite.service';
import {ObjectDto} from '../object/object.dto';

@Injectable()
export class GridDto {
  tiles: TileDto[][];
  objects: { [id: number]: ObjectDto; };
  player: ObjectDto;

  constructor() {
    this.tiles = [[]];
    this.objects = {};
    this.player = null;
  }

  initMap(map: any[][]): void {
    for (const layer of map) {
      for (const place of layer) {
        if (this.tiles[place.tile.y] === undefined) {
          this.tiles[place.tile.y] = [];
        }
        this.tiles[place.tile.y][place.tile.x] = new TileDto(SpriteService.getTileSprite(place.char));

        if (place.object) {
          if (this.objects[place.object.y] === undefined) {
            // TODO: доделать
            this.objects[place.object.y] = [];
          }
          const objectSprite = SpriteService.getObjectSprite(place.object.char);
          this.objects[place.object.y][place.object.x].object = (new ObjectDto(place.object.x, place.object.y, objectSprite));
        }
      }
    }
  }
}
