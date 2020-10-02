import {ObjectDto} from '../dto/object/object.dto';

export class ObjectService {
  createObject(char): ObjectDto {
    switch (char) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
        return new ObjectDto('assets/textures/objects/player/player.png');
      case 'B':
        return new ObjectDto('assets/textures/objects/bush.png');
    }
    return null;
  }
}
