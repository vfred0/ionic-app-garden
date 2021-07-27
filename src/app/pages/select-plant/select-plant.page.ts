import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-select-plant',
  templateUrl: './select-plant.page.html',
  styleUrls: ['./select-plant.page.scss'],
})
export class SelectPlantPage implements OnInit {
  options: Option[] = [
    {
      name: "Pimiento",
      link: "/plant/pimiento"
    },
    {
      name: "Rabano",
      link: "/plant/rabano"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
