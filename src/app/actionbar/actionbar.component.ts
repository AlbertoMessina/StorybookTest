import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.scss']
})
export class ActionbarComponent implements OnInit {

  //STORYBOOK CONFIG

  @Input() actionbar : any;
  //Background color
  @Input() 
  backgroundColor: string;

  //position of button
  @Input() 
  position: 'left' | 'right' | 'center';

  //rounded
  @Input() rounded = false;

  ngOnInit(): void {
    
  }

  public get classes(): string[] {
    
    const mode = this.rounded ? 'actionbar--rounded' : 'actionbar--flat';

    return [ `actionbar--${this.position}`, mode];
  }
}
