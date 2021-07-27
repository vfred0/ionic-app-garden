import { Injectable } from '@angular/core';
import { Stage } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StageService {
  private stages: Stage[];
  private recomedations: string[];

  constructor() {
    this.stages = [
      {
        option: 'Preparacion de la tierra',
        recomendations: ["La tierra debe contener humus de lombrices", "Debe de ser una tierra fertilizada llena de nutrientes, con materia orgánica"],

      },
      {
        option: 'Cosecha',
        recomendations: ["Inicia a los 30 días después del trasplante.", "Si se desean pimientos gruesos, se recomienda aclarar, dejando tan sólo 2 o 3 frutos por cada planta.", "Los pimientos Verdes tendrán tamaño, firmeza y color del fruto.", "Los pimientos maduros presentarán un tono verde profundo más oscuro que el tallo de la planta.", "Los pimientos con un 50% de coloración. Retira los pimientos maduros usando un cuchillo afilado o tijeras de jardín. Córtalos por la parte de arriba del tallo. Si halas los pimientos puedes dañar los tallos o las raíces"],

      },
      {
        option: 'Plagas',
        recomendations: ["Para prevenir el pulgón se puede asociar con la albahaca.  Si se requiere erradicar, puede emplearse jabón potásico e insecticidas vegetales.", "Para prevenir la mosca blanca  se puede pulverizar el envés de las hojas con  jabón potásico al 1% con agua de lluvia o destilada.", "Aparece sobre todo cuando se dan temperaturas altas con baja humedad y/o excesos de nitrógeno en la tierra de cultivo. y se combate con la aspersión durante las noches.", "Para la prevención contra las cochinillas es mas dificil ya que al estar su cuerpo cubierto con excrecencias cerosas blancas, los tratamientos químicos son poco exitosos.", "Para prevenir los trips que son insectos voladores que dejan unas manchas blancas con puntos negros en las hojas. Para combatirla se recomienda una aplicación combinada del extracto de neem y jabón potásico."],
      }
    ]
    this.setRecomendations(this.stages[0].recomendations);
  }

  setRecomendations(recomedations: string[]) {
    this.recomedations = recomedations;
  }
  public getTypeLayout(item: string): string {
    let typeLayout: string = "o-card-";
    let type: string;
    if (item.length < 45) {
      type = "smaller";
    }
    else if (item.length > 45 && item.length < 60) {
      type = "small";
    }
    else if (item.length > 60 && item.length < 80) {
      type = "large";
    }
    else {
      type = "extra-large";
    }
    return typeLayout.concat(type);
  }

  public getOptionWrap(item: string) {
    let classes = {
      // constantClass: true,
      'o-layout-wrap': item.length < 45,
      'o-layout-no-wrap': item.length > 45
    }
    return classes;
  }

  public getRecomendations(): string[] {
    let result: string[] = this.recomedations;

    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result.length - 1; j++) {
        if (result[j].length > result[j + 1].length) {
          let swap = result[j];
          result[j] = result[j + 1];
          result[j + 1] = swap;
        }
      }
    }
    return result;
  }

  public getStages(): Stage[] {
    return this.stages;
  }
}
