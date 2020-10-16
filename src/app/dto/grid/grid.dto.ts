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

  initMap(tiles: string, objects: string): void {
    const tileLayers = tiles.split('\n');
    for (let y = 0; y < tileLayers.length; y++) {
      this.tiles[y] = [];
      for (let x = 0; x < tileLayers[y].length; x++) {
        this.tiles[y][x] = (new TileDto(SpriteService.getTileSprite(tileLayers[y][x])));
      }
    }
    const objectLayers = objects.split('\n');
    for (let y = 0; y < objectLayers.length; y++) {
      for (let x = 0; x < objectLayers[y].length; x++) {
        const objectSprite = SpriteService.getObjectSprite(objectLayers[y][x]);
        if (this.tiles[y][x] && objectSprite) {
          this.tiles[y][x].object = (new ObjectDto(x, y, objectSprite));
        }
      }
    }
  }
}
