import { Injectable } from '@angular/core';
import { ControlName, GardenStyle } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GardenStyleService {
  getRecomendations(): String[] {
    return this.recomendations;
  }


  setResults(controlName: ControlName[]) {
    this.recomendations = []
    controlName.forEach(item => {
      this.recomendations.push(`${item.name}--${item.value}`)
    })
  }
  private recomendations: String[];
  private gardenStyles: GardenStyle[];
  private nameStyle: String;
  private shapeOption: String;

  constructor() {
    this.recomendations = []
    this.gardenStyles = [
      {
        name: "Maceta",
        shape:
          [
            {
              name: "Rectangular",
              controlName: [
                { name: "width", value: "Ancho (pies)" },
                { name: "length", value: "Longitud (pies)" },
                { name: "depth", value: "Profundidad (pulgadas)" }
              ]
            },
            {
              name: "Cuadricular",
              controlName: [
                { name: "length", value: "Longitud (pies)" },
                { name: "depth", value: "Profundidad (pulgadas)" }
              ]
            },
            {
              name: "Circular",
              controlName: [
                { name: "diameter", value: "Diamétros (pies)" },
                { name: "depth", value: "Profundidad (pulgadas)" }
              ]
            }
          ]
      },
      {
        name: "Lecho elevado",
        shape:
          [
            {
              name: "Rectangular",
              controlName: [
                { name: "width", value: "Ancho (pulgadas)" },
                { name: "length", value: "Longitud (pulgadas)" },
                { name: "depth", value: "Profundidad (pulgadas)" }
              ]
            },
            {
              name: "Cuadricular",
              controlName: [
                { name: "length", value: "Longitud (pulgadas)" },
                { name: "depth", value: "Profundidad (pulgadas)" }
              ]
            },
            {
              name: "Circular",
              controlName: [
                { name: "diameter", value: "Diámetros (pulgadas)" },
                { name: "depth", value: "Profundidad (pulgadas)" }
              ]
            }
          ]
      },

    ]
    this.setNameStyle(this.gardenStyles[0].name);
    this.setShapeOption(this.gardenStyles[0].shape[0].name);
  }
  getAllNameGardenStyles(): String[] {
    let result: String[] = new Array();
    this.gardenStyles.forEach(item => {
      result.push(item.name);
    })
    return result;
  }

  getShapeOptions(): String[] {
    let result: String[] = new Array();
    this.gardenStyles[0].shape.forEach(item => {
      result.push(item.name);
    })
    return result;
  }

  getControlName(): ControlName[] {

    let result: ControlName[] = new Array();
    this.gardenStyles.forEach(gardenStyle => {
      if (gardenStyle.name == this.nameStyle) {
        gardenStyle.shape.forEach(shape => {
          if (shape.name == this.shapeOption) {
            result = shape.controlName;
          }
        })
      }
    })
    return result;
  }

  setShapeOption(shapeOption: String) {
    this.shapeOption = shapeOption;
  }
  setNameStyle(nameStyle: String) {
    this.nameStyle = nameStyle;
  }

}
