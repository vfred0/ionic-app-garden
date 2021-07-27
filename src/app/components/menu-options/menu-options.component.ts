import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.scss'],
})
export class MenuOptionsComponent implements OnInit {

  options: string[] = [
    "Recomendaciones para el cultivo",
    "Calculadora de terreno"
  ]

  constructor() { }

  ngOnInit() { }

}
