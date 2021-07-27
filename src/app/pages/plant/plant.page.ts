import { Component, OnInit } from '@angular/core';
import { BackMenu, Stage } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.page.html',
  styleUrls: ['./plant.page.scss']
})

export class PlantPage implements OnInit {
  private optionsBackMenu: BackMenu;

  constructor() {
    this.optionsBackMenu = {
      image: "/assets/images/pimiento.png",
      link: "/select-plant"
    };

  }

  getOptionsBackMenu(): BackMenu {
    return this.optionsBackMenu;
  }

  ngOnInit() {
  }
}
