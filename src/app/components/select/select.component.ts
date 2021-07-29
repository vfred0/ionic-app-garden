import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() private options: String[];
  @Output() private selectOption = new EventEmitter();

  constructor() { }


  onChangeOption(optionSelected: String) {
    this.selectOption.emit(optionSelected);
  }

  getOptions(): String[] {
    return this.options;
  }

  ngOnInit() { }

}
