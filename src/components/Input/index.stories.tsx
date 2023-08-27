import { StoryObj, Meta } from '@storybook/react';
import { Input } from './index.stitches';

export default {
  title: 'Simple Components/Input',
  component: Input,
  args: {
    size: 'regular',
    placeholder: 'Type something...',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['fullwidth', 'halfWidth', 'regular'],
    },
  },
} as Meta;

type Story = StoryObj<typeof Input>;

export const RegularInput: Story = {
  args: {
    size: 'regular',
  },
}

export const FullWidthInput: Story = {
  args: {
    size: 'fullwidth',
  },
}

export const HalfWidthInput: Story = {
  args: {
    size: 'halfWidth',
  },
}