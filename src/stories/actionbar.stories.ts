import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ActionbarComponent } from '../app/actionbar/actionbar.component';
import { Actionbar } from '../app/models/models'

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  // Separare il nome con uno / crea nel canvans di Storybook una sezione. Concantenare più / crea sotto sezioni
  title: 'GenericComponent/card/Actionbar',
  component: ActionbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [ActionbarComponent],
    }),
  ],
  excludeStories: /.*Data$/,
} as Meta;

export const actionsData = {
  onClickAction : action('onClickAction'),
};

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ActionbarComponent> = (args: ActionbarComponent) => ({
  props: {
    ...args,
    onClickAction : actionsData.onClickAction,
  }, 
});

// Con template.bind() possiamo prendere la definizione della funzione e reciclarla
export const Default = Template.bind({});
Default.args = {
  actionbar: {
    position: 'center',
    rounded: false,
    type: 'social'
  }
};

export const leftRoundedCart = Template.bind({});
leftRoundedCart.args = {
  actionbar: {
    position: 'left',
    rounded: true,
    type: 'social'
  }
};

export const rightFlat = Template.bind({});
rightFlat.args = {
  actionbar: {
    position: 'right',
    rounded: false,
    type: 'cart'
  }
};
