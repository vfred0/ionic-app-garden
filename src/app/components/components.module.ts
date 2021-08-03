import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RecomendationsComponent } from "./recomendations/recomendations.component";
import { StagesComponent } from "./stages/stages.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeroBackMenuComponent } from "./hero-back-menu/hero-back-menu.component";
import { AboutPlantComponent } from "./about-plant/about-plant.component";
import { PlantPageRoutingModule } from "../pages/plant/plant-routing.module";
import { SlidesComponent } from "./slides/slides.component";
import { LogoComponent } from "./logo/logo.component";
import { OptionComponent } from "./option/option.component";
import { MenuOptionsComponent } from "./menu-options/menu-options.component";
import { ButtonComponent } from "./button/button.component";
import { TemperaturesComponent } from "./temperatures/temperatures.component";
import { BoxTemperatureComponent } from "./box-temperature/box-temperature.component";
import { SelectComponent } from "./select/select.component";
import { MeasurementsComponent } from "./measurements/measurements.component";


@NgModule({
  declarations: [
    StagesComponent,
    RecomendationsComponent,
    HeroBackMenuComponent,
    AboutPlantComponent,
    SlidesComponent,
    LogoComponent,
    OptionComponent,
    MenuOptionsComponent,
    ButtonComponent,
    TemperaturesComponent,
    BoxTemperatureComponent,
    SelectComponent,
    MeasurementsComponent
  ],
  exports: [
    StagesComponent,
    RecomendationsComponent,
    HeroBackMenuComponent,
    AboutPlantComponent,
    SlidesComponent,
    LogoComponent,
    MenuOptionsComponent,
    ButtonComponent,
    TemperaturesComponent,
    BoxTemperatureComponent,
    SelectComponent,
    MeasurementsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    // FormsModule,
    ReactiveFormsModule,
    PlantPageRoutingModule
  ]
})

export class ComponentsModule { }