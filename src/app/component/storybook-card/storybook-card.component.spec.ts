import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorybookCardComponent } from './storybook-card.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('StorybookCardComponent', () => {
  let component: StorybookCardComponent;
  let fixture: ComponentFixture<StorybookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorybookCardComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorybookCardComponent);
    component = fixture.componentInstance;
    //set storybookcard template
    component.storybookcard = {
      card: {
        id : '0',
        type: 'medium-card',
        title: 'simpleCard'
      },
      actionbar: {
        position : 'center',
        type : 'cart',
        rounded: true
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
