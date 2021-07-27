import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RecomendationsComponent } from "./recomendations/recomendations.component";
import { StagesComponent } from "./stages/stages.component";
import { FormsModule } from "@angular/forms";
import { HeroBackMenuComponent } from "./hero-back-menu/hero-back-menu.component";
import { AboutPlantComponent } from "./about-plant/about-plant.component";
import { PlantPageRoutingModule } from "../pages/plant/plant-routing.module";
import { SlidesComponent } from "./slides/slides.component";
import { LogoComponent } from "./logo/logo.component";
import { OptionComponent } from "./option/option.component";
import { MenuOptionsComponent } from "./menu-options/menu-options.component";
import { AppRoutingModule } from "../app-routing.module";


@NgModule({
  declarations: [
    StagesComponent,
    RecomendationsComponent,
    HeroBackMenuComponent,
    AboutPlantComponent,
    SlidesComponent,
    LogoComponent,
    OptionComponent,
    MenuOptionsComponent
  ],
  exports: [
    StagesComponent,
    RecomendationsComponent,
    HeroBackMenuComponent,
    AboutPlantComponent,
    SlidesComponent,
    LogoComponent,
    MenuOptionsComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    AppRoutingModule
  ]
})

export class ComponentsModule { }