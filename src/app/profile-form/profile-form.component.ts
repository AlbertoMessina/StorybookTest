import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  profileForm : FormGroup;


  constructor( private _fb : FormBuilder) { }

  ngOnInit(): void {

    this.profileForm = this._fb.group({
      name : ['', Validators.required ],
      surname : ['', Validators.required],
      city : ['', Validators.required],
      state : ['', [Validators.required]],
      zip : ['', [Validators.required]] 
    });

  }
 
  get profileControls() { return this.profileForm.controls; }

  onSubmit(){
    console.log(this.profileForm.valid);
    if(!this.profileForm.valid){
      alert('nope');     
      return;
    }
    alert(this.profileForm);
    console.log(this.profileForm.value);
  }
}
