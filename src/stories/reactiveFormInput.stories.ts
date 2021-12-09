import { ReactiveFormsModule } from '@angular/forms';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ReactiveFormInputComponent } from 'src/app/component/form/reactive-form-input/reactive-form-input.component';


export default {

  title: 'GenericComponent/form/reactive-form-input',
  component: ReactiveFormInputComponent,
  decorators: [
    moduleMetadata({
      declarations: [ReactiveFormInputComponent],
      imports: [ReactiveFormsModule]
    }),
  ],
} as Meta;




const Template: Story<ReactiveFormInputComponent> = args => ({
  props: {
    ...args,
  }, 
});


export const Default = Template.bind({});
Default.args = {
    input_id : "name",
    type : 'text',
    label: 'First name',
    placeholder: 'Stupid placeholder'
  };

  export const NumericInput = Template.bind({});
  NumericInput.args = {
      input_id : "number",
      type : 'number',
      label: 'Numeric Input',
      placeholder: '12345'
    };

    export const PasswordInput = Template.bind({});
    PasswordInput.args = {
        input_id : "password",
        type : 'password',
        label: 'Password',
        placeholder: 'insertPassword'
      };
  
  