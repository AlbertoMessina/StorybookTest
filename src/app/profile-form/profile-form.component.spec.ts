import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfileFormComponent } from './profile-form.component';

describe('ProfileFormComponent', () => {
  let component: ProfileFormComponent;
  let fixture: ComponentFixture<ProfileFormComponent>;
  let profileFormControls: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileFormComponent],
      imports: [ReactiveFormsModule, MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should submit', () => {
    component.profileControls.name.setValue('Name');
    component.profileControls.surname.setValue('Surname');
    component.profileControls.zip.setValue('12345');
    component.profileControls.city.setValue('Città');
    component.profileControls.state.setValue('Lostato');

    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it('Should be invalid for name required', () => {
    component.profileControls.name.setValue('');
    component.profileControls.surname.setValue('Surname');
    component.profileControls.zip.setValue('12345');
    component.profileControls.city.setValue('Città');
    component.profileControls.state.setValue('Lostato');

    expect(component.profileForm.valid).toBeFalsy();
  });
});
