import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Actionbar, StorybookCard } from '../models/models'
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

  constructor() { }

  ngOnInit(): void {
  }

  openCard(id : any) {
    console.log('Hello there... General Kenoby');
    this.openCardClick.emit(<any>'Hello there... General Kenoby' + id);
  }
}
