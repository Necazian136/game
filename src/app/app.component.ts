import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GridDto} from './dto/grid/grid.dto';
import {PlayerService} from './service/player.service';
import {ObjectDto} from './dto/object/object.dto';
import {ObjectService} from './service/object.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Game';
  grid: GridDto;
  playerService: PlayerService;
  objectService: ObjectService;
  name: string;
  vision = 11;

  @ViewChild('keyboard') keyboard: ElementRef;

  constructor() {
  }

  onKeyPress(event: KeyboardEvent): void {
    event.preventDefault();
    const inputChar: string = String.fromCharCode(event.charCode);
    this.playerService.movePlayer(inputChar);
  }

  ngOnInit(): void {
    this.grid = new GridDto(this.vision, this.vision);
    this.objectService = new ObjectService();
    this.playerService = new PlayerService(this.objectService, this.grid, new ObjectDto());
  }
}
