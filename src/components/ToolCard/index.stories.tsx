import { Meta, Story } from "@storybook/react";
import { ToolCard } from ".";
import { AuthContext, AuthContextType } from "../../auth/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";

const mockAuthContext: AuthContextType = {
  isLoggedIn: true,
  token: 'mockToken',
  login: () => {},
  logout: () => {},
};

const queryClient = new QueryClient();

const Template: Story<any> = (args) => (
  <AuthContext.Provider value={mockAuthContext}>
    <QueryClientProvider client={queryClient}>
      <ToolCard {...args} />
    </QueryClientProvider>
  </AuthContext.Provider>
);

export const Primary = Template.bind({});
Primary.args = {
  id: 1,
  title: 'Example Tool',
  description: 'This is an example tool.',
  link: 'https://example.com',
  tags: ['tag1', 'tag2', 'tag3'],
  onToolRemove: () => {
    console.log('Tool removed');
  },
};



export default {
  title: 'Compounds Components/ToolCard',
  component: ToolCard,
  tags: ['autodocs']
} as Meta;
