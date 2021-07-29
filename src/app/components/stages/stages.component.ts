import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.scss'],
})
export class StagesComponent implements OnInit {
  @Input() private stages: String[];
  @Output() private stageEventEmitter = new EventEmitter();

  onChangeStage(stageSelected: String) {
    this.stageEventEmitter.emit(stageSelected);
  }

  getStages(): String[] {
    return this.stages;
  }

  constructor() {
  }


  ngOnInit() {
    this.stageEventEmitter.emit(this.getStages()[0]);
  }

}
