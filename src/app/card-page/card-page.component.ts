import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardService } from '../service/card.service';
import { StorybookCardComponent } from '../storybook-card/storybook-card.component';
import { ActionbarComponent } from '../actionbar/actionbar.component';

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
    this.getSmallCard();
    this.getLargeCard();
    this.getMediumCard();
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