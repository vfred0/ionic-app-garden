import { Injectable } from '@angular/core';
import { ButtonTemperature, Plant } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  getStages(): String[] {
    return null;
  }

  private plant: Plant;
  constructor() {
    this.plant = {
      name: "Pimiento",
      description: "",
      stages: [
        {
          title: "",
          recomendations: []
        }
      ]
    }
  }


  getRecomendations(): String[] {
    return null;
  }
  setRecomendations(recomendations: String[]) {

  }
  getTemperatures(): ButtonTemperature[] {
    return null;
  }

  getAboutPlant(): String[] {
    return null;
  }
}
