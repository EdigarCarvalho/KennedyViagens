
import { StoryObj, Meta } from '@storybook/react';

import { Button } from './index.stitches';

export default {
  title: 'Components/Button',
  component: Button,
  args:{
      children: 'Click me',
  },
  argTypes: { color: { control: 'select', options: ['ButtonPrimaryNeutral','ButtonPrimaryDanger'] }}
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
