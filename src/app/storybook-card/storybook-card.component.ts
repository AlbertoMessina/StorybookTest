import { Component, Input, OnInit } from '@angular/core';
import { Actionbar } from '../models/models'
@Component({
  selector: 'app-storybook-card',
  templateUrl: './storybook-card.component.html',
  styleUrls: ['./storybook-card.component.scss']
})
export class StorybookCardComponent implements OnInit {

  //child input
  @Input() position: string;

  @Input() rounded: boolean;


  @Input() title: string;
  
  @Input() imageSrc: string;

  @Input() altImageSrc: string;

  @Input() type: 'small-card' | 'large-card' | 'medium-card'; 

  constructor() { }

  ngOnInit(): void {
  }

}
