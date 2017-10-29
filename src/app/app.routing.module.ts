import { AuthGuard } from './guards/auth.guard';
import { GamesModule } from './games/games.module';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
},
    { path: '', redirectTo: '/home', pathMatch: 'full',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
},
    { path: 'games', 
    loadChildren: 'app/games/games.module#GamesModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}