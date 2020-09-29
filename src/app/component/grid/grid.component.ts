import {Component, OnInit} from '@angular/core';
import {TileDto} from '../../dto/tile/tile.dto';
import {ObjectDto} from '../../dto/object/object.dto';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  tiles: TileDto[][] = [];

  ngOnInit(): void {
    for (let y = 0; y < 15; y++) {
      this.tiles[y] = [];
      for (let x = 0; x < 15; x++) {
        this.tiles[y][x] = (new TileDto(x, y));
      }
    }

    this.tiles[7][7].addObject(new ObjectDto());
  }
}
