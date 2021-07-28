import { Component, Input, OnInit } from '@angular/core';
import { Stage } from 'src/app/interfaces/interfaces';
import { StageService } from '../../services/stage.service';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.scss'],
})
export class StagesComponent implements OnInit {
  @Input() private stages: String[];

  dataRecomendations: string[];
  constructor(private _stageService: StageService) {
    this.dataRecomendations = this._stageService.getRecomendations();
  }
  public getStages(): Stage[] {
    return [...this._stageService.getStages()];
  }

  public updateDataRecomendations() {
    this._stageService.setRecomendations(this.dataRecomendations);
  }
  ngOnInit() { }

}
