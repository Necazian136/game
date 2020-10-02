export class ResponseDto {
  map: string[][];

  constructor(response: string) {
    const obj = JSON.parse(response);
    const mapString: string = obj.map;
    const self = this;
    let y = 0;
    this.map = [];
    mapString.split('\n').forEach((row) => {
      let x = 0;
      this.map[y] = [];
      row.split('').forEach((char) => {
        self.map[y][x] = char;
        x++;
      });
      y++;
    });
  }
}
