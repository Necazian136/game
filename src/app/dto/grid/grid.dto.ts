import {TileDto} from '../tile/tile.dto';

export class GridDto {
  tiles: TileDto[][] = [];
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  initMap(x: number, y: number): void {
    for (let i = y - (this.height / 2); i < y + (this.height / 2); i++) {
      this.tiles[i] = [];
      for (let j = x - (this.width / 2); j < x + (this.width / 2); j++) {
        this.tiles[y][x] = (new TileDto(x, y));
      }
    }
  }
}
