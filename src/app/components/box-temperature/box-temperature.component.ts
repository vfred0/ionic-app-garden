import { Component, Input, OnInit } from '@angular/core';
import { BoxTemperature } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-box-temperature',
  templateUrl: './box-temperature.component.html',
  styleUrls: ['./box-temperature.component.scss'],
})
export class BoxTemperatureComponent implements OnInit {
  @Input() private boxTemperature: BoxTemperature;
  constructor() { }

  ngOnInit() { }

  getTitle(): String {
    return this.boxTemperature.title;
  }

  getTemperature(): String {
    return this.boxTemperature.temperature;
  }
}
