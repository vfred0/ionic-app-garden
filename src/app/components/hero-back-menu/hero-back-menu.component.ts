import { Component, Input, OnInit } from '@angular/core';
import { BackMenu } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-hero-back-menu',
  templateUrl: './hero-back-menu.component.html',
  styleUrls: ['./hero-back-menu.component.scss'],
})
export class HeroBackMenuComponent implements OnInit {
  @Input() index: number;

  private images: String[];

  constructor() {
    this.images = [
      "/assets/images/pimiento.png",
      "/assets/images/select-plant.png"
    ]
  }

  getImage(): String {
    return this.images[this.index];
  }

  ngOnInit() { }

}
