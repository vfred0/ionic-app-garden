import { Component, OnInit } from '@angular/core';
import { BackMenu, ButtonTemperature, Stage } from 'src/app/interfaces/interfaces';
import { PlantService } from 'src/app/services/plant/plant.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.page.html',
  styleUrls: ['./plant.page.scss']
})

export class PlantPage implements OnInit {
  private optionsBackMenu: BackMenu;

  constructor(private plantService: PlantService) {
    this.optionsBackMenu = {
      image: "/assets/images/pimiento.png",
      link: "/select-plant"
    };
  }

  getRecomendations(): String[] {
    return this.plantService.getRecomendations();
  }

  setRecomendations(recomendations: String[]) {
    this.plantService.setRecomendations(recomendations);
  }
  getTemperatures(): ButtonTemperature[] {
    return this.plantService.getTemperatures();
  }

  getAboutPlant(): String[] {
    return this.plantService.getAboutPlant();
  }

  getStages(): String[] {
    return this.plantService.getStages();
  }
  getOptionsBackMenu(): BackMenu {
    return this.optionsBackMenu;
  }

  ngOnInit() {
  }
}
