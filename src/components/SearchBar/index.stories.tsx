import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SearchBar } from './index';
import { SearchBarProps } from '../../interfaces';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  args: {
    onSearch: action('onSearch'),
  },
} as Meta;

export const DefaultSearchBar: Story<SearchBarProps> = (args) => <SearchBar {...args} />;
