import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackMenu, TemperatureStage, Stage } from 'src/app/interfaces/interfaces';
import { PlantService } from 'src/app/services/plant/plant.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.page.html',
  styleUrls: ['./plant.page.scss']
})

export class PlantPage implements OnInit {
  private optionsBackMenu: BackMenu;


  constructor(private activatedRoute: ActivatedRoute, private plantService: PlantService) {
    // this.optionsBackMenu = {
    //   image: "/assets/images/pimiento.png",
    //   link: "/select-plant"
    // };
  }

  getRecomendations(): String[] {
    return this.plantService.getRecomendations();
  }

  setRecomendations(stage: String) {
    this.plantService.setRecomendations(stage);
  }

  getTemperatures(): TemperatureStage[] {
    return this.plantService.getTemperaturesStages();
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
    this.activatedRoute.params.subscribe(({ namePlant }) => {
      console.log(namePlant)
      this.plantService.setNamePlant(namePlant);
    })


    this.optionsBackMenu = {
      image: this.plantService.getPathImage(),
      link: "/select-plant"
    }
  }
}
