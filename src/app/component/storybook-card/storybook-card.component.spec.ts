import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorybookCardComponent } from './storybook-card.component';

describe('StorybookCardComponent', () => {
  let component: StorybookCardComponent;
  let fixture: ComponentFixture<StorybookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorybookCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorybookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
