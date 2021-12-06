import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { StorybookCardComponent } from './storybook-card/storybook-card.component';
import { ActionbarComponent } from './actionbar/actionbar.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';

import { CardService } from './service/card.service';
import { CardPageComponent } from './card-page/card-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    StorybookCardComponent,
    ActionbarComponent,
    ProfileFormComponent,
    CardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
