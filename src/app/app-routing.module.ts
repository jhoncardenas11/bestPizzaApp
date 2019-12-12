import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { LoginGuard } from './auth/login.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'singin', component: LoginComponent},
  {path: 'restaurants', component: RestaurantsComponent, canActivate: [LoginGuard]},
  {path: 'restaurant/:id', component: RestaurantDetailComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
