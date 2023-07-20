import { Component, Input } from '@angular/core';
import { IAsset } from 'src/app/commons/interfaces';

@Component({
  selector: 'app-card-all-assets',
  templateUrl: './card-all-assets.component.html',
  styleUrls: ['./card-all-assets.component.css']
})
export class CardAllAssetsComponent {
  @Input() assets: IAsset[] = [];
}
