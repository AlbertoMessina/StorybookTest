import { Story, Meta } from '@storybook/angular/types-6-0';
import { StorybookCardComponent } from '../app/storybook-card/storybook-card.component';
import { StorybookCard } from '../app/models/models'
import { ActionbarComponent } from 'src/app/actionbar/actionbar.component';

import actionbarStories, * as ActionbarStories from './actionbar.stories'
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  // Separare il nome con uno / crea nel canvans di Storybook una sezione. Concantenare più / crea sotto sezioni
  title: 'storybookTest/Card',
  component: StorybookCardComponent,
  // Per permettere la composizione con storybook bisogna importare entrambi i componenti
  decorators: [
    moduleMetadata({
      declarations: [StorybookCardComponent, ActionbarComponent],
      imports: [CommonModule]
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(story => `<div class="m-1">${story}</div>`),
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<StorybookCard> = (args: StorybookCard) => ({
  props: {
    ...args,
    onClickAction: ActionbarStories.actionsData.onClickAction,
    openCardClick: action('openCardClick'),
  }
});

// Con template.bind() possiamo prendere la definizione della funzione e reciclarla
export const BaseCard = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
BaseCard.args = {

  actionbar: {
    // with 
    ...ActionbarStories.leftRoundedCart.args.actionbar,
  },
  card: {
    id: '0',
    title: 'Default Card',
    imageSrc: '../../assets/Lunedi.jpg',
    altImageSrc: 'monday crying frog',
    type: 'medium-card'
  },
};

export const NoImageCard = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
NoImageCard.args = {


  actionbar: {
    ...ActionbarStories.Default.args.actionbar,
  },
  card: {
    ...BaseCard.args.card,
    id: '1',
    title: 'No image card',
    altImageSrc: 'Monday crying frog',
    imageSrc: ''
  }

};

export const LargeImageCard = Template.bind({});
LargeImageCard.args = {
  actionbar: {
    ...BaseCard.args.actionbar,
  },
  card: {
    ...BaseCard.args.card,
    title: 'Large image card',
    imageSrc: '../../assets/martedi.jpg',
    altImageSrc: 'Nice green guy',
    type: 'large-card'
  }
}

export const cardWithRightAction = Template.bind({});
cardWithRightAction.args = {
  actionbar: {
    ...ActionbarStories.rightFlat.args.actionbar,
  },
  card: {
    ...BaseCard.args.card,
    title: 'Wow Right Action and flat button in a sigle Cards',
    imageSrc: '../../assets/mercoledi.jpg',
    altImageSrc: 'TACOS CATS',
  }
}
