export class ResponseDto {
  event: string;
  data: any;

  constructor(response: string) {
    const obj = JSON.parse(response);
    this.event = obj.event;
    this.data = obj.data;
  }
}
