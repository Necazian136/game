import {TileDto} from '../tile/tile.dto';

export class GridDto {
  tiles: TileDto[][] = [];

  constructor(width: number, height: number) {
    for (let y = 0; y < height; y++) {
      this.tiles[y] = [];
      for (let x = 0; x < width; x++) {
        this.tiles[y][x] = (new TileDto(x, y));
      }
    }
    console.log(this.tiles);
  }
}
