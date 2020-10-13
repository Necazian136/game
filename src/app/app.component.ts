import {Component, ElementRef, NgModule, OnInit, ViewChild} from '@angular/core';
import {GridDto} from './dto/grid/grid.dto';
import {PlayerService} from './service/player.service';
import {ObjectDto} from './dto/object/object.dto';
import {ObjectService} from './service/object.service';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Game';
  grid: GridDto;
  playerService: PlayerService;
  name: string;
  vision = 11;

  @ViewChild('keyboard') keyboard: ElementRef;

  constructor(playerService: PlayerService) {
    this.playerService = playerService;
  }

  ngOnInit(): void {
    this.grid = new GridDto(this.vision, this.vision);

    window.onkeypress = (event) => {
      this.playerService.movePlayer(event.key);
    };
  }
}
