import { Component, Input, OnInit, Output } from '@angular/core';
import { Button, ButtonTemperature, Temperature } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-temperatures',
  templateUrl: './temperatures.component.html',
  styleUrls: ['./temperatures.component.scss'],
})
export class TemperaturesComponent implements OnInit {

  private buttons: ButtonTemperature[];
  @Input() private temperatures: Temperature[];

  constructor() {
    this.buttons = [
      {
        title: "Germinación",
        class: "o-button-color-g100",
        temperatures: [
          {
            title: "Mínimo",
            degrees: "23ºC"
          },
          {
            title: "Maximo",
            degrees: "32ºC"
          },
          {
            title: "Optimo",
            degrees: "12ºC"
          }
        ]
      },
      {
        title: "Crecimiento vegetativo",
        class: "o-button-disable o-button-color-w200",
        temperatures: [
          {
            title: "Mínimo",
            degrees: "100ºC"
          },
          {
            title: "Maximo",
            degrees: "100ºC"
          },
          {
            title: "Optimo",
            degrees: "100ºC"
          }
        ]
      },
      {
        title: "Floración y fructificación",
        class: "o-button-disable o-button-color-w200",
        temperatures: [
          {
            title: "Mínimo",
            degrees: "10ºC"
          },
          {
            title: "Maximo",
            degrees: "8ºC"
          },
          {
            title: "Optimo",
            degrees: "9ºC"
          }
        ]
      }
    ]

    this.temperatures = this.buttons[0].temperatures;
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
          this.temperatures = b.temperatures;
        }
      })
    }
    button.class = 'button-enable o-button-color-g100';
  }

  getTemperatures(): Temperature[] {
    return this.temperatures;
  }

  ngOnInit() {

  }



}
