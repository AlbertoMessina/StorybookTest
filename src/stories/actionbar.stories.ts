import { Story, Meta } from '@storybook/angular/types-6-0';
import { ActionbarComponent } from '../app/actionbar/actionbar.component';
import { Actionbar } from '../app/models/models'

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  // Separare il nome con uno / crea nel canvans di Storybook una sezione. Concantenare più / crea sotto sezioni
  title: 'storybookTest/actionbar',
  component: ActionbarComponent,

} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ActionbarComponent> = (args: ActionbarComponent) => ({
  props: args,
});

// Con template.bind() possiamo prendere la definizione della funzione e reciclarla
export const Default = Template.bind({});

Default.args = {

  position: 'center',

};

export const leftRounded = Template.bind({});

leftRounded.args = {

  rounded: true,
  position: 'left',
  
};

export const rightFlat = Template.bind({});

rightFlat.args = {

  rounded: false,
  position: 'right',
  
    
};


