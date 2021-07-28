import { Component, OnInit } from '@angular/core';
import { BoxTemperature, Button, ButtonTemperature } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-temperatures',
  templateUrl: './temperatures.component.html',
  styleUrls: ['./temperatures.component.scss'],
})
export class TemperaturesComponent implements OnInit {

  private buttons: ButtonTemperature[];
  private boxTemperatures: BoxTemperature[];
  constructor() {
    this.buttons = [
      {
        title: "Germinación",
        class: "o-button-color-g100",
        temperatures: [
          {
            title: "Mínimo",
            temperature: "23ºC"
          },
          {
            title: "Maximo",
            temperature: "32ºC"
          },
          {
            title: "Optimo",
            temperature: "12ºC"
          }
        ]
      },
      {
        title: "Crecimiento vegetativo",
        class: "o-button-disable o-button-color-w200",
        temperatures: [
          {
            title: "Mínimo",
            temperature: "100ºC"
          },
          {
            title: "Maximo",
            temperature: "100ºC"
          },
          {
            title: "Optimo",
            temperature: "100ºC"
          }
        ]
      },
      {
        title: "Floración y fructificación",
        class: "o-button-disable o-button-color-w200",
        temperatures: [
          {
            title: "Mínimo",
            temperature: "10ºC"
          },
          {
            title: "Maximo",
            temperature: "8ºC"
          },
          {
            title: "Optimo",
            temperature: "9ºC"
          }
        ]
      }
    ]

    this.boxTemperatures = this.buttons[0].temperatures;
  }


  getButtons(): Button[] {
    return this.buttons;
  }

  eventButon(button: Button) {
    if (button.class.includes('disable')) {
      this.buttons.forEach(b => {
        if (b.title != button.title) {
          b.class = 'button-disable o-button-color-w200';
        } else {
          this.boxTemperatures = b.temperatures;
        }
      })
    }
    button.class = 'button-enable o-button-color-g100';
  }

  getBoxTemperatures(): BoxTemperature[] {
    return this.boxTemperatures;
  }

  ngOnInit() {

  }



}
