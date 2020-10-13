import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './component/grid/grid.component';
import { TileComponent } from './component/tile/tile.component';
import { ObjectComponent } from './component/object/object.component';
import {PlayerService} from './service/player.service';
import {ObjectService} from './service/object.service';
import {SocketService} from './service/socket.service';

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
  providers: [PlayerService, ObjectService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
