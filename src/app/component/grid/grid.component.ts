import {Component, Input, OnInit} from '@angular/core';
import {GridDto} from '../../dto/grid/grid.dto';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() grid: GridDto;

  ngOnInit(): void {}
}
