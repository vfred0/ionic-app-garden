import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandCalculatorPage } from './land-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: LandCalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandCalculatorPageRoutingModule {}
