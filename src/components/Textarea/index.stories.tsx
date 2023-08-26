import { action } from '@storybook/addon-actions';
import { Textarea } from '..';


export default {
  title: 'Components/Textarea',
  component: Textarea,
};

export const Default = () => (
  <Textarea placeholder="Enter your text" onChange={action('onChange')} />
);

export const FullWidth = () => (
  <Textarea
    placeholder="Enter your text"
    onChange={action('onChange')}
    size="fullwidth"
  />
);

export const HalfWidth = () => (
  <Textarea
    placeholder="Enter your text"
    onChange={action('onChange')}
    size="halfWidth"
  />
);
