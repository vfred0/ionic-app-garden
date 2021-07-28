import { Component, OnInit } from '@angular/core';
import { Button, ButtonTemperature } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-temperatures',
  templateUrl: './temperatures.component.html',
  styleUrls: ['./temperatures.component.scss'],
})
export class TemperaturesComponent implements OnInit {

  private buttons: ButtonTemperature[];

  constructor() {
    this.buttons = [
      {
        title: "Germinación",
        class: "o-button-color-g100",
        minimun: "23ºC",
        optimun: "32ºC",
        maximun: "12ºC"
      },
      {
        title: "Crecimiento vegetativo",
        class: "o-button-disable o-button-color-w200",
        minimun: "23ºC",
        optimun: "32ºC",
        maximun: "12ºC"
      },
      {
        title: "Floración y fructificación",
        class: "o-button-disable o-button-color-w200",
        minimun: "23ºC",
        optimun: "32ºC",
        maximun: "12ºC"
      }
    ]
  }


  getButtons(): Button[] {
    return this.buttons;
  }

  eventButon(button: Button) {
    if (button.class.includes('disable')) {
      this.buttons.forEach(b => {
        if (b.title != button.title) {
          b.class = 'button-disable o-button-color-w200';
        }
      })
      button.class = 'button-enable o-button-color-g100';
    }
  }

  ngOnInit() { }



}
