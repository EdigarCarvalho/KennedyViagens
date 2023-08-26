
import { StoryObj, Meta } from '@storybook/react';
import { Button } from './index.stitches';

export default {
    title: 'Components/Button',
    component: Button,
    args: {
      color: 'ButtonPrimaryNeutral',
      size: 'md',
      children: 'Click me',
    },
    argTypes: {
      color: {
        control: 'select',
        options: ['ButtonPrimaryNeutral', 'ButtonPrimaryDanger', 'ButtonSecondarySuccess', 'ButtonSecondaryDanger'],
      },
      size: {
        control: 'radio',
        options: ['sm', 'md', 'lg'],
      },
      
    },
  } as Meta;

type Story = StoryObj<typeof Button>;

export const ButtonPrimaryNeutral: Story = {
    args:{
        color: 'ButtonPrimaryNeutral',    
    }
}

export const ButtonPrimaryDanger: Story = {
    args:{
        color: 'ButtonPrimaryDanger',    
    }
}
