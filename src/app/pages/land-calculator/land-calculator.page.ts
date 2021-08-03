import { Component, OnInit } from '@angular/core';
import { BackMenu, Button, ControlName } from 'src/app/interfaces/interfaces';
import { GardenStyleService } from 'src/app/services/gardenStyle/garden-style.service';

@Component({
  selector: 'app-land-calculator',
  templateUrl: './land-calculator.page.html',
  styleUrls: ['./land-calculator.page.scss'],
})
export class LandCalculatorPage implements OnInit {

  private optionsBackMenu: BackMenu;
  private buttons: Button[];

  constructor(private gardenStyle: GardenStyleService) {
    this.buttons = new Array();
    this.optionsBackMenu = {
      image: "/assets/images/land-calculator.png",
      link: "/home"
    }
  }
  resetRecomendations() {
    this.setResults([])
  }

  getRecomendations(): String[] {
    return this.gardenStyle.getRecomendations();
  }

  getOptionsBackMenu(): BackMenu {
    return this.optionsBackMenu;
  }

  getButtonsGardenStyle(): Button[] {
    return this.buttons;
  }

  setResults(controlName: ControlName[]) {
    this.gardenStyle.setResults(controlName);
  }

  getShapeOptions(): String[] {
    return this.gardenStyle.getShapeOptions();
  }

  onChangeShapeOption(selectOption: String) {
    this.gardenStyle.setShapeOption(selectOption);
  }

  onChangeSelectButton(button: Button) {
    if (button.class.includes('disable')) {
      this.buttons.forEach(b => {
        if (b.title != button.title) {
          b.class = 'button-disable o-button-color-w200';
        }
      })
    }
    button.class = 'button-enable o-button-color-g100';
    this.gardenStyle.setNameStyle(button.title);
  }

  getMeasurements(): ControlName[] {
    return this.gardenStyle.getControlName();
  }

  ngOnInit() {
    this.gardenStyle.getAllNameGardenStyles().forEach((nameStyle, index) => {
      if (index == 0) {
        this.buttons.push({
          title: nameStyle,
          class: "o-button-color-g100"
        })
      } else {
        this.buttons.push({
          title: nameStyle,
          class: "button-disable o-button-color-w200"
        })
      }
    });

  }

}
