import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'reactive-form-input',
  templateUrl: './reactive-form-input.component.html',
  styleUrls: ['./reactive-form-input.component.scss']
})
export class ReactiveFormInputComponent implements OnInit {

  @Input() input_id : string;
  
  @Input() type : string;

  @Input() label : string;

  @Input() placeholder? : string;

  @Input () control?: FormControl;
  constructor() { }

  ngOnInit(): void {

  }

}
