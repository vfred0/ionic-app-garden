import { Component, Input, OnInit } from '@angular/core';
import { BackMenu, Option } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-select-plant',
  templateUrl: './select-plant.page.html',
  styleUrls: ['./select-plant.page.scss'],
})
export class SelectPlantPage implements OnInit {

  private optionsBackMenu: BackMenu;
  private optionsMenu: Option[];

  constructor() {
    this.optionsBackMenu = {
      image: "/assets/images/select-plant.png",
      link: "/home"
    };

    this.optionsMenu = [
      {
        name: "Pimiento",
        link: "/plant/Pimiento",
        parameters: true
      },
      {
        name: "Rabano",
        link: "/plant/Pimiento",
        parameters: true
      }
    ];

  }

  getOptionsMenu(): Option[] {
    return this.optionsMenu;
  }

  getOptionsBackMenu(): BackMenu {
    return this.optionsBackMenu;
  }

  ngOnInit() {
  }

}
