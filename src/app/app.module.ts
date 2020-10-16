import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './component/grid/grid.component';
import { TileComponent } from './component/tile/tile.component';
import { ObjectComponent } from './component/object/object.component';
import {PlayerService} from './service/player.service';
import {SpriteService} from './service/sprite.service';
import {SocketService} from './service/socket.service';
import {MapService} from './service/map.service';
import {GridDto} from './dto/grid/grid.dto';
import {Globals} from './globals/globals';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    TileComponent,
    ObjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PlayerService, MapService, SpriteService, SocketService, GridDto, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
