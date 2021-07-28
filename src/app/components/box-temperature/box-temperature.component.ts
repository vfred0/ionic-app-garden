import { Component, Input, OnInit } from '@angular/core';
import { Temperature } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-box-temperature',
  templateUrl: './box-temperature.component.html',
  styleUrls: ['./box-temperature.component.scss'],
})
export class BoxTemperatureComponent implements OnInit {
  @Input() private temperature: Temperature;
  constructor() { }

  ngOnInit() { }

  getTitle(): String {
    return this.temperature.title;
  }

  getDegrees(): String {
    return this.temperature.degrees;
  }
}
