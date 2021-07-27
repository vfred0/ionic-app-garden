import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  options: Option[] = [
    {
      name: "Recomendaciones para el cultivo",
      link: "/modal-plant"
    },
    {
      name: "Calculadora de terreno",
      link: "/land-calculator"
    }
  ]
  constructor() { }

  ngOnInit() {
  }


}
