import { GamesComponent } from './games.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const gamesRoutes: Routes = [
    { path: '', component: GamesComponent }

];

@NgModule({
    imports: [RouterModule.forChild(gamesRoutes)],
    exports: [RouterModule]
})
export class GamesRoutingModule {}
