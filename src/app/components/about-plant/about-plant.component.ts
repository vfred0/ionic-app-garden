import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-plant',
  templateUrl: './about-plant.component.html',
  styleUrls: ['./about-plant.component.scss'],
})
export class AboutPlantComponent implements OnInit {

  @Input() aboutPlant: String[];

  constructor() { }

  ngOnInit() { }

  getTitle(): String {
    return this.aboutPlant[0];
  }

  getDescription(): String {
    return this.aboutPlant[1];
  }

}
