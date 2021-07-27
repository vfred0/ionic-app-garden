import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-back-menu',
  templateUrl: './hero-back-menu.component.html',
  styleUrls: ['./hero-back-menu.component.scss'],
})
export class HeroBackMenuComponent implements OnInit {
  public image: string = '/assets/images/slider.png';
  constructor() { }

  ngOnInit() { }

}
