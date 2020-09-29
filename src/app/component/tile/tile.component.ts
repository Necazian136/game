import {Component, Input, OnInit} from '@angular/core';
import {TileDto} from '../../dto/tile/tile.dto';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() tile: TileDto;

  constructor() {
  }

  ngOnInit(): void {
  }
}
