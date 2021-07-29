import { Component, Input, OnInit, Optional } from '@angular/core';
import { BackMenu, Option } from 'src/app/interfaces/interfaces';
import { PlantService } from 'src/app/services/plant/plant.service';

@Component({
  selector: 'app-select-plant',
  templateUrl: './select-plant.page.html',
  styleUrls: ['./select-plant.page.scss'],
})
export class SelectPlantPage implements OnInit {

  private optionsBackMenu: BackMenu;
  private optionsMenu: Option[];

  constructor(private plantService: PlantService) {
    this.optionsMenu = new Array();
    this.optionsBackMenu = {
      image: "/assets/images/select-plant.png",
      link: "/home"
    };
  }

  getOptionsMenu(): Option[] {
    return this.optionsMenu;
  }

  getOptionsBackMenu(): BackMenu {
    return this.optionsBackMenu;
  }

  ngOnInit() {
    this.plantService.getAllNamePlants().forEach(namePlant => {
      this.optionsMenu.push({
        name: namePlant,
        link: `/plant/${namePlant}`
      })
    })
  }

}
