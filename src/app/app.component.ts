import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GridDto} from './dto/grid/grid.dto';
import {PlayerService} from './service/player.service';
import {ObjectDto} from './dto/object/object.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {

  title = 'Game';
  grid: GridDto;
  playerService: PlayerService;
  name: string;
  vision = 11;
  ws: WebSocket;

  @ViewChild('keyboard') keyboard: ElementRef;

  constructor() {
  }

  onKeyPress(event: KeyboardEvent): void {
    event.preventDefault();
    const inputChar: string = String.fromCharCode(event.charCode);
    this.playerService.movePlayer(inputChar);
  }

  ngAfterViewInit(): void {
    const keyboard: any = this.keyboard.nativeElement;
    keyboard.focus();

    keyboard.onblur = () => {
      keyboard.focus();
    };
  }

  ngOnInit(): void {
    this.ws = new WebSocket('ws://localhost:8080');

    this.ws.onopen = () => {
      this.ws.onmessage = (event) => {
        console.log(event);
      };


      // this.ws.send('Here\'s some text that the server is urgently awaiting!');
    };
    this.grid = new GridDto(this.vision, this.vision);
    this.playerService = new PlayerService(this.grid, new ObjectDto());
  }
}
