import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandCalculatorPageRoutingModule } from './land-calculator-routing.module';

import { LandCalculatorPage } from './land-calculator.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandCalculatorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LandCalculatorPage]
})
export class LandCalculatorPageModule { }
