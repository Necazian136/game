import {Injectable} from '@angular/core';

@Injectable()
export class SpriteService {
  static getTileSprite(char): string {
    switch (char) {
      case 'G':
        return 'assets/textures/tile/grass.jpg';
    }
    return null;
  }

  static getObjectSprite(char): string {
    switch (char) {
      case 'B':
        return 'assets/textures/objects/bush.png';
    }
    return null;
  }

  static getObjectSpriteByType(type): string {
    switch (type) {
      case 'Bush':
        return 'assets/textures/objects/bush.png';
      case 'Player':
        return 'assets/textures/objects/player/player.png';
    }
    return null;
  }
}
