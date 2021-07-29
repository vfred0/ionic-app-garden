import { Injectable } from '@angular/core';
import { Plant, TemperatureStage } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  getPathImage(): String {
    let result: String;
    this.plants.forEach(plant => {
      if (plant.name == this.namePlant) {
        result = plant.image;
      }
    })
    return result;
  }
  // getAllNamePlants(): import("src/app/interfaces/interfaces").Option[] {

  // }

  private plants: Plant[];
  private namePlant: String;
  private recomendations: String[];

  constructor() {
    this.plants = [
      {
        name: "Pimiento",
        description: "Capsicum annuum, comúnmente pimiento, chile, ají dulce, pimentón o morrón, entre una multitud de localismos, es la especie más conocida, extendida y cultivada del género Capsicum, de la familia Solanaceae.",
        stages: [
          {
            title: 'Preparacion de la tierra',
            recomendations: ["La tierra debe contener humus de lombrices", "Debe de ser una tierra fertilizada llena de nutrientes, con materia orgánica"],

          },
          {
            title: 'Cosecha',
            recomendations: ["Inicia a los 30 días después del trasplante.", "Si se desean pimientos gruesos, se recomienda aclarar, dejando tan sólo 2 o 3 frutos por cada planta.", "Los pimientos Verdes tendrán tamaño, firmeza y color del fruto.", "Los pimientos maduros presentarán un tono verde profundo más oscuro que el tallo de la planta.", "Los pimientos con un 50% de coloración. Retira los pimientos maduros usando un cuchillo afilado o tijeras de jardín. Córtalos por la parte de arriba del tallo. Si halas los pimientos puedes dañar los tallos o las raíces"],

          },
          {
            title: 'Plagas',
            recomendations: ["Para prevenir el pulgón se puede asociar con la albahaca.  Si se requiere erradicar, puede emplearse jabón potásico e insecticidas vegetales.", "Para prevenir la mosca blanca  se puede pulverizar el envés de las hojas con  jabón potásico al 1% con agua de lluvia o destilada.", "Aparece sobre todo cuando se dan temperaturas altas con baja humedad y/o excesos de nitrógeno en la tierra de cultivo. y se combate con la aspersión durante las noches.", "Para la prevención contra las cochinillas es mas dificil ya que al estar su cuerpo cubierto con excrecencias cerosas blancas, los tratamientos químicos son poco exitosos.", "Para prevenir los trips que son insectos voladores que dejan unas manchas blancas con puntos negros en las hojas. Para combatirla se recomienda una aplicación combinada del extracto de neem y jabón potásico."],
          }
        ],
        temperaturesStages: [
          {
            name: "Germinación",
            temperatures: [
              {
                title: "Mínimo",
                degrees: "01 ºC"
              },
              {
                title: "Optimo",
                degrees: "01 ºC"
              },
              {
                title: "Maximo",
                degrees: "01 ºC"
              }
            ]
          },
          {
            name: "Floración y fructificación",
            temperatures: [
              {
                title: "Mínimo",
                degrees: "02 ºC"
              },
              {
                title: "Optimo",
                degrees: "02 ºC"
              },
              {
                title: "Maximo",
                degrees: "02 ºC"
              }
            ]
          },
          {
            name: "Crecimiento vegetativo",
            temperatures: [
              {
                title: "Mínimo",
                degrees: "03 ºC"
              },
              {
                title: "Optimo",
                degrees: "03 ºC"
              },
              {
                title: "Maximo",
                degrees: "03 ºC"
              }
            ]
          },
        ],
        image: "/assets/images/pimiento.png"
      },
      {
        name: "Rabano",
        description: "EL rabano Capsicum annuum, comúnmente pimiento, chile, ají dulce, pimentón o morrón, entre una multitud de localismos, es la especie más conocida, extendida y cultivada del género Capsicum, de la familia Solanaceae.",
        stages: [
          {
            title: 'Preparacion de la tierra',
            recomendations: ["La tierra debe contener humus de lombrices", "Debe de ser una tierra fertilizada llena de nutrientes, con materia orgánica"],

          },
          {
            title: 'Cosecha',
            recomendations: ["Inicia a los 30 días después del trasplante.", "Si se desean pimientos gruesos, se recomienda aclarar, dejando tan sólo 2 o 3 frutos por cada planta.", "Los pimientos Verdes tendrán tamaño, firmeza y color del fruto.", "Los pimientos maduros presentarán un tono verde profundo más oscuro que el tallo de la planta.", "Los pimientos con un 50% de coloración. Retira los pimientos maduros usando un cuchillo afilado o tijeras de jardín. Córtalos por la parte de arriba del tallo. Si halas los pimientos puedes dañar los tallos o las raíces"],

          },
          {
            title: 'Plagas',
            recomendations: ["Para prevenir el pulgón se puede asociar con la albahaca.  Si se requiere erradicar, puede emplearse jabón potásico e insecticidas vegetales.", "Para prevenir la mosca blanca  se puede pulverizar el envés de las hojas con  jabón potásico al 1% con agua de lluvia o destilada.", "Aparece sobre todo cuando se dan temperaturas altas con baja humedad y/o excesos de nitrógeno en la tierra de cultivo. y se combate con la aspersión durante las noches.", "Para la prevención contra las cochinillas es mas dificil ya que al estar su cuerpo cubierto con excrecencias cerosas blancas, los tratamientos químicos son poco exitosos.", "Para prevenir los trips que son insectos voladores que dejan unas manchas blancas con puntos negros en las hojas. Para combatirla se recomienda una aplicación combinada del extracto de neem y jabón potásico."],
          }
        ],
        temperaturesStages: [
          {
            name: "Germinación",
            temperatures: [
              {
                title: "Mínimo",
                degrees: "01 ºC"
              },
              {
                title: "Optimo",
                degrees: "01 ºC"
              },
              {
                title: "Maximo",
                degrees: "01 ºC"
              }
            ]
          },
          {
            name: "Floración y fructificación",
            temperatures: [
              {
                title: "Mínimo",
                degrees: "02 ºC"
              },
              {
                title: "Optimo",
                degrees: "02 ºC"
              },
              {
                title: "Maximo",
                degrees: "02 ºC"
              }
            ]
          },
          {
            name: "Crecimiento vegetativo",
            temperatures: [
              {
                title: "Mínimo",
                degrees: "03 ºC"
              },
              {
                title: "Optimo",
                degrees: "03 ºC"
              },
              {
                title: "Maximo",
                degrees: "03 ºC"
              }
            ]
          },
        ],
        image: "/assets/images/rabano.jpg"
      },
    ]
  }


  getRecomendations(): String[] {
    return this.recomendations;
  }

  setNameStage(stage: String) {
    let result: String[] = new Array();
    this.plants.forEach(plant => {
      if (plant.name === this.namePlant) {
        plant.stages.forEach(i => {
          if (i.title === stage) {
            result = i.recomendations;
          }
        })
      }
    });
    this.recomendations = result;
  }


  getTemperaturesStages(): TemperatureStage[] {
    let result: TemperatureStage[] = new Array();
    this.plants.forEach(plant => {
      if (plant.name === this.namePlant) {
        result = plant.temperaturesStages;
      }
    })

    return result;
  }

  getAboutPlant(): String[] {
    let result: String[] = new Array();
    this.plants.forEach(plant => {
      if (plant.name === this.namePlant) {
        result.push(plant.name);
        result.push(plant.description);
      }
    })
    return result;

  }

  getStages(): String[] {
    let result: String[] = new Array();
    this.plants.forEach(plant => {
      if (plant.name === this.namePlant) {
        plant.stages.forEach(stage => {
          result.push(stage.title);
        })
      }
    })
    return result;
  }

  getAllNamePlants(): String[] {
    let result: String[] = new Array();
    this.plants.forEach(plant => {
      result.push(plant.name);
    })
    return result;
  }

  setNamePlant(namePlant: String) {
    this.namePlant = namePlant;
  }
}
