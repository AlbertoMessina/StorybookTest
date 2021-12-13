import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardService } from '../service/card.service';
import { StorybookCardComponent } from '../component/storybook-card/storybook-card.component';
import { ActionbarComponent } from '../component/actionbar/actionbar.component';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss']
})
export class CardPageComponent implements OnInit {

  @Input() state: string = 'medium';

  @Input()
  storybookcards: any;


  constructor(
    private cardService: CardService
  ) { }

  ngOnInit(): void {
  if(this.state =='small') {
    this.getSmallCard();
  }
  if(this.state =='large') {
    this.getLargeCard();
  }

  if(this.state =='medium') {
    this.getMediumCard();
  }
  
  console.log(this.storybookcards);
  
  }

  getSmallCard() {
    const card = this.cardService.getSmallCard().subscribe(
      data => this.storybookcards = data
    );
  }

  getMediumCard() {
    const card = this.cardService.getMediumCard().subscribe(
      data => this.storybookcards = data
    );
  }

  getLargeCard() {
    const card = this.cardService.getLargeCard().subscribe(
      data => this.storybookcards = data
    );
  }
}
