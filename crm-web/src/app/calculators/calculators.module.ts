import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NdsComponent} from './nds/nds.component';
import {RouterModule, Routes} from '@angular/router';
import {CalculatorsIndexComponent} from './calculators-index/calculators-index.component';

const routes: Routes = [
  {path: '', component: CalculatorsIndexComponent},
  {path: 'nds', component: NdsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [NdsComponent, CalculatorsIndexComponent]
})
export class CalculatorsModule {
}
