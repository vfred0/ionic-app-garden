import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectPlantPage } from './select-plant.page';

const routes: Routes = [
  {
    path: '',
    component: SelectPlantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectPlantPageRoutingModule {}
