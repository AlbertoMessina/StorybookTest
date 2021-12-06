import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SmallStorybookCard, MediumStorybookCard, LargeStorybookCard } from '../../assets/data/card-mock'

import { StorybookCard } from '../models/models';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getSmallCard(): Observable<any> {
    const card = SmallStorybookCard;
    const cards = of(card);
    return cards;
  }

  getMediumCard(): Observable<any> {
    const card = MediumStorybookCard;
    const cards = of(card);
    return cards;
  }

  getLargeCard(): Observable<any> {
    const card = LargeStorybookCard;
    const cards = of(card);
    return cards;
  }
}
