import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CardFormComponent } from './card-form.component';
import { StorybookCardComponent } from '../component/storybook-card/storybook-card.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionbarComponent } from '../component/actionbar/actionbar.component';

describe('CardFormComponent', () => {
  let component: CardFormComponent;
  let fixture: ComponentFixture<CardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFormComponent,StorybookCardComponent, ActionbarComponent],
      imports: [MatDialogModule,BrowserAnimationsModule, ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid', () => {
    component.cardFormControl.title.setValue('');
    component.cardFormControl.img.setValue('');
    expect(component.cardForm.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.cardFormControl.title.setValue('Name');
    expect(component.cardForm.valid).toBeTruthy();

  });

  it('title input required', () => {
    component.cardFormControl.title.setValue('');
    expect(component.cardFormControl.title.errors).toBeTruthy('');
  });

  it('on Submit should be invalid', () => {
    component.cardFormControl.title.setValue('');
    component.submit();
    expect(component.submitted).toBeFalsy();
  })

  it('on submit should be valid', () => {
    component.cardFormControl.title.setValue('Name');
    component.submit();
    expect(component.submitted).toBeTruthy();
  })
});
