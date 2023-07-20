import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() inputName: string = "";

  @Input() textError: string = "";
  @Input() isPassword: boolean = false;
  @Input() value!: string;
  @Output() setValue: EventEmitter<any>  = new EventEmitter();



  labelWithInputValue = {
    backgroundColor: 'white',
    fontSize: '10px',
    bottom: '-10px',
  }

  labelWithOutInputValue = {
    backgroundColor: 'transparent',
    fontSize: '14px',
    bottom: '-30px',
  }

  labelStyle = {
    display:'block',
    position:'relative',
    width:'fit-content', 
    left:'10px',
    padding:'0px 5px',
    fontWeight: 'normal !important',
    color: '#777',
    transitionProperty: 'bottom, font-size, background-color',
    transitionDuration: '0.3s',
    zIndex: 0,
    ...this.labelWithOutInputValue,
  }

  inputError = {
    border:'1px solid #bbb',
  }

  handleFocus(){
    this.labelStyle = {
      ...this.labelStyle,
      ...this.labelWithInputValue
    }
  }

  handleValue(event: Event){
    const input = event.target as HTMLInputElement;
    this.setValue.emit(input.value)

    if(input.value !== ""){
      this.labelStyle = {
        ...this.labelStyle,
        ...this.labelWithInputValue
      }
    }
    else{
      this.labelStyle = {
        ...this.labelStyle,
        ...this.labelWithOutInputValue
      }
    }
  } 

}
