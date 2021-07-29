import { Component, Input, OnInit } from '@angular/core';
import { RecomendationsService } from 'src/app/services/recomendations/recomendations.service';


@Component({
  selector: 'app-recomendations',
  templateUrl: './recomendations.component.html',
  styleUrls: ['./recomendations.component.scss'],
})
export class RecomendationsComponent implements OnInit {
  @Input() private recomendations: String[];
  constructor(private recomendationsService: RecomendationsService) {
  }

  ngOnInit() { }

  getOptionWrap(item: string) {
    return this.recomendationsService.getOptionWrap(item);
  }

  getTypeLayout(item: string): string {
    return this.recomendationsService.getTypeLayout(item);
  }

  getRecomendations(): String[] {
    return this.recomendationsService.getSortRecomendations(this.recomendations);
  }

}
