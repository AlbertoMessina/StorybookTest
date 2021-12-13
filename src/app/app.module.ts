import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog'
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { StorybookCardComponent } from './component/storybook-card/storybook-card.component';
import { ActionbarComponent } from './component/actionbar/actionbar.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';

import { CardService } from './service/card.service';
import { CardPageComponent } from './card-page/card-page.component';
import { ReactiveFormInputComponent } from './component/form/reactive-form-input/reactive-form-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import storybookCardStories from 'src/stories/storybookCard.stories';
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    StorybookCardComponent,
    ActionbarComponent,
    ProfileFormComponent,
    CardPageComponent,
    ReactiveFormInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSliderModule
  ],
  providers: [
    CardService
  ],
  entryComponents: [
    ProfileFormComponent,
    ActionbarComponent,
    StorybookCardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
