import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';

import { ProfileFormComponent } from '../app/profile-form/profile-form.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ReactiveFormInputComponent } from 'src/app/component/form/reactive-form-input/reactive-form-input.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionbarComponent } from 'src/app/component/actionbar/actionbar.component';
export default {
    component: ProfileFormComponent,
    decorators: [
        moduleMetadata({
            declarations: [ProfileFormComponent, ReactiveFormInputComponent, ActionbarComponent],
            imports: [CommonModule, ReactiveFormsModule, MatDialogModule, BrowserAnimationsModule], 
        }),
    ],
    excludeStories: /.*Data$/,
    title: 'GenericComponent/Form/profileForm',
} as Meta;

export const actionsData = {
   
};

const Template: Story<ProfileFormComponent> = args => ({
    props: {
        ...args, 
    },
});

export const Default = Template.bind({});
Default.args = {

};
