import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'reactive-form-input',
  templateUrl: './reactive-form-input.component.html',
  styleUrls: ['./reactive-form-input.component.scss']
})
export class ReactiveFormInputComponent implements OnInit {

  @Input() input_id: string;

  @Input() type: string;

  @Input() label: string;

  @Input() placeholder?: string;

  @Input() validity: any = undefined;

  @Input() control?: FormControl;
  constructor() { }

  ngOnInit(): void {

  }

  public get classes(){

    let mode = "untouched-input";
    if (this.validity != undefined) {
      mode = this.validity ? 'valid-input' : 'invalid-input';
    }
    return [mode];
  }

}
