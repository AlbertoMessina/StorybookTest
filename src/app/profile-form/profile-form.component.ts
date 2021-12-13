import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActionbarComponent } from '../component/actionbar/actionbar.component';
@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  profileForm: FormGroup;


  constructor(
    private _fb: FormBuilder,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.profileForm = this._fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]]
    });

  }

  get profileControls() { return this.profileForm.controls; }

  onSubmit() {
  }

}
