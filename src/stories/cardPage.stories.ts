import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';

import { SmallStorybookCard , LargeStorybookCard, MediumStorybookCard } from 'src/assets/data/card-mock';
import { CardPageComponent } from 'src/app/card-page/card-page.component';
import { StorybookCardComponent } from 'src/app/component/storybook-card/storybook-card.component';
import { ActionbarComponent } from 'src/app/component/actionbar/actionbar.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


export default {
    component: CardPageComponent,
    decorators: [
        moduleMetadata({
            declarations: [CardPageComponent, StorybookCardComponent, ActionbarComponent],
            imports: [CommonModule],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: {} }
              ]
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
    storybookcards: SmallStorybookCard,
    state: 'small'
};


export const Medium = Template.bind({});
Medium.args = {
    storybookcards: MediumStorybookCard,
    state: 'medium'
};


export const Large = Template.bind({});
Large.args = {
    storybookcards: LargeStorybookCard,
    state: 'large'
};
