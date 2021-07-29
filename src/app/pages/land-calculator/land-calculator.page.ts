import { Component, OnInit } from '@angular/core';
import { BackMenu, Button } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-land-calculator',
  templateUrl: './land-calculator.page.html',
  styleUrls: ['./land-calculator.page.scss'],
})
export class LandCalculatorPage implements OnInit {

  private optionsBackMenu: BackMenu;
  private buttons: Button[];

  constructor() {
    this.buttons = [
      {
        title: "Maceta",
        class: "o-button-color-g100"
      },
      {
        title: "Lecho elevado",
        class: "button-disable o-button-color-w200"
      }
    ];
    this.optionsBackMenu = {
      image: "/assets/images/land-calculator.png",
      link: "/home"
    }
  }

  getOptionsBackMenu(): BackMenu {
    return this.optionsBackMenu;
  }

  getButtonsGardenStyle(): Button[] {
    return this.buttons;
  }

  eventButton(button: Button) {
    console.log("presionado boton estilo ", button)
    if (button.class.includes('disable')) {
      this.buttons.forEach(b => {
        if (b.title != button.title) {
          b.class = 'button-disable o-button-color-w200';
        }
      })
    }
    button.class = 'button-enable o-button-color-g100';
  }
  ngOnInit() {
  }

}
