import {Component, Input, OnInit} from '@angular/core';
import {TileDto} from '../../dto/tile/tile.dto';
import {Globals} from '../../globals/globals';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  providers: [Globals]
})
export class TileComponent implements OnInit {

  @Input() tile: TileDto;
  globals: Globals;

  constructor(globals: Globals) {
    this.globals = globals;
  }

  ngOnInit(): void {
  }
}
