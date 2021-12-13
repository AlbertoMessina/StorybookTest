import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Actionbar, StorybookCard } from '../../models/models'
@Component({
  selector: 'app-storybook-card',
  templateUrl: './storybook-card.component.html',
  styleUrls: ['./storybook-card.component.scss']
})
export class StorybookCardComponent implements OnInit {

  //child input

  @Input() storybookcard: StorybookCard;

  @Output()
  onClickAction = new EventEmitter<Event>();

  @Output()
  openCardClick = new EventEmitter<Event>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit(): void {
    if (this.data.set) {
      console.log(this.data);
      this.imagePreview(this.data.file);
      this.storybookcard = this.data.storybookcard;
    }
  }

  openCard(id: any) {
    console.log('Hello there... General Kenoby');
    this.openCardClick.emit(<any>'Hello there... General Kenoby' + id);
  }


  imagePreview(e: any) {
    const file = e;
    const reader = new FileReader();
    reader.onload = () => {
      this.storybookcard.card.imageSrc = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
}
