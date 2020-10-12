export class ResponseDto {
  event: string;
  data: object;

  constructor(response: string) {
    const obj = JSON.parse(response);
    this.event = obj.event;
    this.data = obj.data;
  }
}
