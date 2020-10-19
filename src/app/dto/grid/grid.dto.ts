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
        this.tiles[place.tile.y][place.tile.x] = new TileDto(SpriteService.getTileSprite(place.tile.char));

        if (place.object) {
          const objectSprite = SpriteService.getObjectSprite(place.object.char);
          const object = (new ObjectDto(place.object.id, place.object.x, place.object.y, objectSprite));
          if (this.objects[place.object.id] === undefined) {
            this.tiles[place.object.y][place.object.x].object = object;
          }
        }
      }
    }
  }
}
