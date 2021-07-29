import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private optionsMenu: Option[];

  constructor() {
    this.optionsMenu = [
      {
        name: "Recomendaciones para el cultivo",
        link: "/select-plant"

      },
      {
        name: "Calculadora de terreno",
        link: "/land-calculator"
      }
    ];
  }

  getOptionsMenu(): Option[] {
    return this.optionsMenu;
  }

  ngOnInit() {
  }


}
