import { Component, Input, OnInit } from '@angular/core';
import { OptionButton } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  @Input() private options: OptionButton;

  constructor() { }

  public clickButton() {

  }


  public getContent(): String {
    return "Lecho elevado";
  }

  ngOnInit() { }

}
