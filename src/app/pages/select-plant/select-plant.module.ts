import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPlantPageRoutingModule } from './select-plant-routing.module';

import { SelectPlantPage } from './select-plant.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPlantPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SelectPlantPage]
})
export class SelectPlantPageModule { }
