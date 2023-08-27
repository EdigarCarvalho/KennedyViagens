// NewToolDialog.stories.tsx
import { NewToolDialog } from './';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Meta, Story } from '@storybook/react';
import { AuthContext, AuthContextType } from '../../auth/AuthContext';

export default {
  title: 'Compounds Components/NewToolDialog',
  component: NewToolDialog,
  argTypes: {
    onToolAdded: {
      action: 'clicked' 
    },
  },
} as Meta;

const queryClient = new QueryClient();

const mockAuthContext: AuthContextType = {
  isLoggedIn: true,
  token: 'mockToken',
  login: () => {},
  logout: () => {},
};



const Template: Story<any> = (args) => (
  <AuthContext.Provider value={mockAuthContext}>
    <QueryClientProvider client={queryClient}>
      <NewToolDialog {...args} />
    </QueryClientProvider>
  </AuthContext.Provider>
); 

export const Primary = Template.bind({});
Primary.args = {
  onToolAdded: () => undefined,
}

export const Mobile = Template.bind({});
   Mobile.parameters = {
     viewport: {
       defaultViewport: 'mobile1',
     },
   };
