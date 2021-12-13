import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Actionbar } from '../../models/models';
import { AlignType } from '../../models/models';

@Component({
  selector: 'actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.scss']
})
export class ActionbarComponent implements OnInit {

  //STORYBOOK CONFIG
  @Input() actionbar: Actionbar;

  @Output()
  onClickAction = new EventEmitter<Event>();



  constructor(
  
  ) { }

  ngOnInit(): void {
  }

  onClick(social: any) {
    this.onClickAction.emit(social);
  }

  public get classes(): string[] {
    const mode = this.actionbar?.rounded ? 'actionbar--rounded' : 'actionbar--flat';
    return [`actionbar--${this.actionbar?.position}`, mode];
  }
}
