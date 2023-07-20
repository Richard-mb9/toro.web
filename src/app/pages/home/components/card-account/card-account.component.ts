import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-account',
  templateUrl: './card-account.component.html',
  styleUrls: ['./card-account.component.css']
})
export class CardAccountComponent {
  @Input() branch: string = "";
  @Input() bank: string = "";
  @Input() account:string = "";
}
