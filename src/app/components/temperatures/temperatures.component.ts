import { Component, Input, OnInit, Output } from '@angular/core';
import { Button, Temperature, TemperatureStage } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-temperatures',
  templateUrl: './temperatures.component.html',
  styleUrls: ['./temperatures.component.scss'],
})
export class TemperaturesComponent implements OnInit {

  private buttons: Button[];
  @Input() private temperaturesStages: TemperatureStage[];
  private temperatures: Temperature[];

  constructor() {
    this.buttons = new Array();
  }


  getButtons(): Button[] {
    return this.buttons;
  }

  eventButton(button: Button) {
    if (button.class.includes('disable')) {
      this.buttons.forEach(b => {
        if (b.title != button.title) {
          b.class = 'button-disable o-button-color-w200';
        }
      })
    }
    button.class = 'button-enable o-button-color-g100';
    this.temperaturesStages.forEach(i => {
      if (i.name == button.title) {
        this.temperatures = i.temperatures;
      }
    })
  }

  getTemperatures(): Temperature[] {
    return this.temperatures;
  }

  ngOnInit() {
    this.sortedTemperatures();
    console.log("oredenado ", this.temperaturesStages)
    this.temperaturesStages.forEach((temperatureStage, index) => {
      let button: Button;
      if (index === 0) {
        button = {
          title: temperatureStage.name,
          class: "o-button-color-g100"
        }
      } else {
        button = {
          title: temperatureStage.name,
          class: "o-button-disable o-button-color-w200"
        }
      }
      this.buttons.push(button);
    })


    this.temperatures = this.temperaturesStages[0].temperatures;
  }

  private sortedTemperatures() {
    this.temperaturesStages.sort((i: any, j: any) => i.name.length > j.name.length ? 1 : -1)
    // this.temperaturesStages.sort(function (a, b) {
    //   if (a.name.length > b.name.length) {
    //     return 1;
    //   }
    //   if (a.name.length < b.name.length) {
    //     return -1;
    //   }
    //   // a must be equal to b
    //   return 0;
    // })

    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  }


}

