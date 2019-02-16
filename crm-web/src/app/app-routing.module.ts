import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'calculators',
    loadChildren: './calculators/calculators.module#CalculatorsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
