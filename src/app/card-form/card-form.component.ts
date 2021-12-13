import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { StorybookCard } from '../models/models';
import { StorybookCardComponent } from '../component/storybook-card/storybook-card.component';


@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})

export class CardFormComponent implements OnInit {

  filePath: string;
  cardForm: FormGroup;

  storybookcard: StorybookCard;

  constructor(
    public fb: FormBuilder,
    private _dialog: MatDialog) {

    this.cardForm = this.fb.group({
      img: [null],
      title: ['']
    })
  }

  ngOnInit(): void { }

  imagePreview(e: any) {
    const file = (e.target as HTMLInputElement).files[0];

    this.cardForm.patchValue({
      img: file
    });

    this.cardForm.get('img').updateValueAndValidity()

    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
      console.log(this.filePath);
    }
    reader.readAsDataURL(file)
  }

  submit() {


    this.storybookcard = {
      card: {
        id: '0',
        title: this.cardForm.get('title').value,
        altImageSrc: this.cardForm.get('title').value,
        type: "medium-card"
      },
      actionbar: {
        position: 'center',
        rounded: false,
        type: 'cart'
      }
    }

    console.log(this.storybookcard);

    let dialogRef = this._dialog.open(StorybookCardComponent, {
      data: {
        set: true,
        storybookcard: this.storybookcard,
        file: this.cardForm.get('img').value
      },
      maxWidth: '600px',
    });
  }
}
