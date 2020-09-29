import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './component/grid/grid.component';
import { TileComponent } from './component/tile/tile.component';
import { ObjectComponent } from './component/object/object.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
