import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';

import { CardFormComponent } from 'src/app/card-form/card-form.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ReactiveFormInputComponent } from 'src/app/component/form/reactive-form-input/reactive-form-input.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionbarComponent } from 'src/app/component/actionbar/actionbar.component';
import { StorybookCardComponent } from 'src/app/component/storybook-card/storybook-card.component';
export default {
    component: CardFormComponent,
    decorators: [
        moduleMetadata({
            declarations: [CardFormComponent, ReactiveFormInputComponent, ActionbarComponent, StorybookCardComponent],
            imports: [CommonModule, ReactiveFormsModule, MatDialogModule, BrowserAnimationsModule],
        }),
        //👇 Wraps our stories with a decorator
        componentWrapperDecorator(story => `<div class="d-flex justify-content-center">${story}</div>`),

    ],
    excludeStories: /.*Data$/,
    title: 'GenericComponent/Form/CardForm',
} as Meta;

export const actionsData = {

};

const Template: Story<CardFormComponent> = args => ({
    props: {
        ...args,
    },
});

export const Default = Template.bind({});
Default.args = {

};
