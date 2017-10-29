import { GamesRoutingModule } from './games.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';

@NgModule({
  imports: [
    CommonModule,
    GamesRoutingModule
  ],
  
  declarations: [GamesComponent]
})
export class GamesModule { }
