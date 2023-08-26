import { Meta, Story } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Dashboard from '.';
import { AuthContext, AuthContextType } from '../../auth/AuthContext';

const mockAuthContext: AuthContextType = {
    isLoggedIn: true,
    token: 'mockToken',
    login: () => {},
    logout: () => {},
  };

const queryClient = new QueryClient();

export default {
  title: 'Components/Dashboard',
  component: Dashboard,
  decorators: [
    (StoryFn) => (
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={mockAuthContext}>
          <StoryFn />
          </AuthContext.Provider>
      </QueryClientProvider>
    ),
  ],
} as Meta;

const Template: Story = (args) => <Dashboard {...args} />;

export const Default = Template.bind({});
Default.args = {};

// export const Group: Story = (args) => (
//     <Dashboard {...args}>
//       <CardsContainer>
//         {mockTools.map((tool) => (
//           <ToolCard key={tool.id} {...tool} />
//         ))}
//       </CardsContainer>
//     </Dashboard>
//   );