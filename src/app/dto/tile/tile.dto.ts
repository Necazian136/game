import {ObjectDto} from '../object/object.dto';

export class TileDto {
  sprite: string;
  object: ObjectDto;

  constructor(sprite: string = null) {
    this.sprite = sprite;
    this.object = null;
  }
}
