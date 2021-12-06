import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';

import { CardService } from 'src/app/service/card.service';
import { CardPageComponent } from 'src/app/card-page/card-page.component';
import { StorybookCardComponent } from 'src/app/storybook-card/storybook-card.component';
import { ActionbarComponent } from 'src/app/actionbar/actionbar.component';


export default {
    component: CardPageComponent,
    decorators: [
        moduleMetadata({
            declarations: [CardPageComponent, StorybookCardComponent, ActionbarComponent],
            imports: [CommonModule],
        }),
    ],
    excludeStories: /.*Data$/,
    title: 'Pages/cardPage',
} as Meta;

export const actionsData = {

};

const Template: Story<CardPageComponent> = args => ({
    props: {
        ...args,
        // onPinTask: actionsData.onPinTask,

    },
});

export const Default = Template.bind({});
Default.args = {
    state: 'small'
};


export const Medium = Template.bind({});
Medium.args = {
    state: 'medium'
};


export const Large = Template.bind({});
Large.args = {
    state: 'large'
};
