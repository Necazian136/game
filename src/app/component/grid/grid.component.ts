import {Component, Input} from '@angular/core';
import {GridDto} from '../../dto/grid/grid.dto';
import {Globals} from '../../globals/globals';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  @Input() grid: GridDto;
  globals: Globals;

  constructor(globals: Globals) {
    this.globals = globals;
  }
}
