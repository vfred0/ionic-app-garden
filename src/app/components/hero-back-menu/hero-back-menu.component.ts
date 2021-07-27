import { Component, Input, OnInit } from '@angular/core';
import { BackMenu } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-hero-back-menu',
  templateUrl: './hero-back-menu.component.html',
  styleUrls: ['./hero-back-menu.component.scss'],
})
export class HeroBackMenuComponent implements OnInit {
  @Input() private optionsBackMenu: BackMenu;

  constructor() {
  }

  getImage(): String {
    return this.optionsBackMenu.image;
  }

  getLink(): String {
    return this.optionsBackMenu.link;
  }
  ngOnInit() { }

}
