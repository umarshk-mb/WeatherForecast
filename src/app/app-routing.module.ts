import { WeatherResolverResolver } from './guards/weather-resolver.resolver';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { FavoriteComponent } from './Components/favorite/favorite.component';
import { SearchComponent } from './Components/search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'favorite',component:FavoriteComponent, resolve: { message: WeatherResolverResolver }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
