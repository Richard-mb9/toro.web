import { Component, Input } from '@angular/core';
import { ITrend } from 'src/app/commons/interfaces';

@Component({
  selector: 'app-card-trends',
  templateUrl: './card-trends.component.html',
  styleUrls: ['./card-trends.component.css']
})
export class CardTrendsComponent {
  @Input() trends: ITrend[] = [];
}
