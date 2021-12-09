import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';

import { ProfileFormComponent } from '../app/profile-form/profile-form.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ReactiveFormInputComponent } from 'src/app/component/form/reactive-form-input/reactive-form-input.component';

export default {
    component: ProfileFormComponent,
    decorators: [
        moduleMetadata({
            declarations: [ProfileFormComponent, ReactiveFormInputComponent],
            imports: [CommonModule, ReactiveFormsModule],
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
        // onPinTask: actionsData.onPinTask,
    },
});

export const Default = Template.bind({});
Default.args = {

};

