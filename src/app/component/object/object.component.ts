import {Component, Input, OnInit} from '@angular/core';
import {ObjectDto} from '../../dto/object/object.dto';
import {Globals} from '../../globals/globals';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

  @Input() object: ObjectDto;
  globals: Globals;

  constructor(globals: Globals) {
    this.globals = globals;
  }

  ngOnInit(): void {
  }
}
