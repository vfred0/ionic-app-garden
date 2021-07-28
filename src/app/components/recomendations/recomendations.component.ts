import { Component, Input, OnInit } from '@angular/core';
import { StageService } from '../../services/stage.service';

@Component({
  selector: 'app-recomendations',
  templateUrl: './recomendations.component.html',
  styleUrls: ['./recomendations.component.scss'],
})
export class RecomendationsComponent implements OnInit {
  @Input() private recomendations: String[];
  constructor(private _stageService: StageService) {
  }

  ngOnInit() { }

  public getRecomendations(): string[] {
    return [...this._stageService.getRecomendations()];
  }

  public getOptionWrap(item: string) {
    return this._stageService.getOptionWrap(item);
  }

  public getTypeLayout(item: string): string {
    return this._stageService.getTypeLayout(item);
  }


}
