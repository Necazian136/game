export class ObjectDto {
  x: number;
  y: number;
  sprite: string;

  constructor(x: number, y: number, sprite: string = null) {
    this.x = x;
    this.y = y;
    if (sprite === null) {
      sprite = 'https://pbs.twimg.com/profile_images/496102814880239616/IDgM95XQ.png';
    }
    this.sprite = sprite;
  }
}
