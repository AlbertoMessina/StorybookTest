import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Actionbar } from '../models/models';
import { AlignType } from '../models/models';

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
  
  ngOnInit(): void {
    
  }
  
  onClick(social : any){
    console.log(social);
    this.onClickAction.emit(social);
  }

  public get classes(): string[] {
    const mode = this.actionbar?.rounded ? 'actionbar--rounded' : 'actionbar--flat';
    return [ `actionbar--${this.actionbar?.position}`, mode];
  }
}
