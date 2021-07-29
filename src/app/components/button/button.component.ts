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

  clickButton() {
    this.getButton.emit(this.button);
  }

  getTitle(): String {
    return this.button.title;
  }

  getClasses(): String {
    return this.button.class;
  }

  ngOnInit() {

  }

}
