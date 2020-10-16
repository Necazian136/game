import {Component, ElementRef, NgModule, OnInit, ViewChild} from '@angular/core';
import {GridDto} from './dto/grid/grid.dto';
import {PlayerService} from './service/player.service';
import {MapService} from './service/map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Game';
  grid = new GridDto();
  playerService: PlayerService;
  mapService: MapService;

  @ViewChild('keyboard') keyboard: ElementRef;

  constructor(playerService: PlayerService, mapService: MapService, grid: GridDto) {
    this.playerService = playerService;
    this.mapService = mapService;
    this.grid = grid;
  }

  ngOnInit(): void {
    window.onkeypress = (event) => {
      this.playerService.movePlayer(event.key);
    };
  }
}
