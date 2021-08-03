import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecomendationsService {

  constructor() { }


  getTypeLayout(item: string): string {
    let typeLayout: string = "o-card-";
    let type: string;
    if (item.length < 45) {
      type = "smaller";
    }
    else if (item.length > 45 && item.length < 60) {
      type = "small";
    }
    else if (item.length > 60 && item.length < 95) {
      type = "large";
    }
    else {
      type = "extra-large";
    }
    return typeLayout.concat(type);
  }

  getOptionWrap(item: string) {
    let classes = {
      // constantClass: true,
      'o-layout-wrap': item.length < 45,
      'o-layout-no-wrap': item.length > 45
    }
    return classes;
  }

  getSortRecomendations(recomendations: String[]): String[] {
    let result: String[] = recomendations;

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
}
