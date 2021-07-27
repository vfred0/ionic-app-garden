import { Component, Input, OnInit } from '@angular/core';
import { Option } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.scss'],
})
export class MenuOptionsComponent implements OnInit {

  @Input() options: Option[];
  // options: Option[] = [
  //   {
  //     name: "Recomendaciones para el cultivo",
  //     link: "/modal-plant"
  //   },
  //   {
  //     name: "Calculadora de terreno",
  //     link: "/modal-plant"
  //   }
  // ]
  // options: {name:string, link:string}[] = [
  //   {
  //     name: "Recomendaciones para el cultivo",
  //     link: "/modal-plant"
  //   },
  //   {
  //     name: "Calculadora de terreno",
  //     link: "/modal-plant"
  //   }
  // ]

  constructor() { }

  ngOnInit() { }

}
