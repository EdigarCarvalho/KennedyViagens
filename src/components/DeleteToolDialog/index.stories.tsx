
import { DeleteToolDialog } from './index';
import { AuthContext, AuthContextType } from '../../auth/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Meta, Story } from '@storybook/react';


const queryClient = new QueryClient();

const mockAuthContext: AuthContextType = {
    isLoggedIn: true,
    token: 'mockToken',
    login: () => {},
    logout: () => {},
  };

const Template: Story<any> = () => (
    <AuthContext.Provider value={mockAuthContext}>
    <QueryClientProvider client={queryClient}>
      <DeleteToolDialog
        id={1}
        onToolRemove={() => {
          console.log('Tool removed');
        }}
      />
    </QueryClientProvider>
  </AuthContext.Provider>
);


export default {
  title: 'Components/DeleteToolDialog',
  component: DeleteToolDialog,
} as Meta;

export const Primary = Template.bind({});

export const Mobile = Template.bind({});
   Mobile.parameters = {
     viewport: {
       defaultViewport: 'mobile1',
     },
   };
