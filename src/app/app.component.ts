import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GridDto} from './dto/grid/grid.dto';
import {PlayerService} from './service/player.service';

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

  @ViewChild('keyboard') keyboard: ElementRef;

  constructor() {
  }

  onKeyPress(event: KeyboardEvent): void {
    event.preventDefault();
    const inputChar: string = String.fromCharCode(event.charCode);
    console.log(inputChar);
  }

  ngAfterViewInit(): void {
    const keyboard: any = this.keyboard.nativeElement;
    keyboard.focus();

    keyboard.onblur = () => {
      keyboard.focus();
    };
  }

  ngOnInit(): void {
    this.grid = new GridDto(15, 15);
    this.playerService = new PlayerService();
  }
}
