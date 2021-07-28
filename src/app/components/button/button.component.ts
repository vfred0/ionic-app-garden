import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Button } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  @Input() private button: Button;
  @Output() getButton = new EventEmitter();
  constructor() { }

  public clickButton() {
    this.getButton.emit(this.button);
  }


  public getTitle(): String {
    return this.button.title;
  }

  public getClasses(): String {
    return this.button.class;
  }



  ngOnInit() {

  }

}
