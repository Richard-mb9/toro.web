import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IAsset } from 'src/app/commons/interfaces';

@Component({
  selector: 'app-modal-compra',
  templateUrl: './modal-compra.component.html',
  styleUrls: ['./modal-compra.component.css']
})
export class ModalCompraComponent {
  @Input() show: boolean = false;
  @Output() close: EventEmitter<any>  = new EventEmitter();

  @Input() asset: IAsset = {} as IAsset;

  handleClose(){
    this.close.emit()
  }

}
