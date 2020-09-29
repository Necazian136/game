import {Component, Input, OnInit} from '@angular/core';
import {ObjectDto} from '../../dto/object/object.dto';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

  @Input() object: ObjectDto;

  constructor() {
  }

  ngOnInit(): void {
  }

  isObjectHasSprite(): boolean {
    return !!this.object.sprite;
  }

}
