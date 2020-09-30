export class ObjectDto {

  sprite: string;

  constructor(sprite: string = null) {
    if (sprite === null) {
      sprite = 'https://pbs.twimg.com/profile_images/496102814880239616/IDgM95XQ.png';
    }
    this.sprite = sprite;
  }
}
