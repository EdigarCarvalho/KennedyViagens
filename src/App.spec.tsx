
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import { AuthContext, AuthContextType } from './auth/AuthContext';
import { Auth } from './pages';

describe('Auth Component', () => {
  it('renders company name and subtitle', () => {
    render(<Auth />);

    const companyName = screen.getByTestId('company-name');
    const subTitle = screen.getByTestId('sub-title');

    expect(companyName).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();

    expect(companyName).toHaveTextContent('FEMAQUA');
    expect(subTitle).toHaveTextContent('Ferramentas Maravilhosas que Adoro');
  });

  it('renders AuthLogin component when not logged in', () => {
    render(
      <AuthContext.Provider value={{
        isLoggedIn: false,
        token: 'mockToken',
        login: () => {},
        logout: () => {},
      }}>
        <Auth />
      </AuthContext.Provider>
    );

    const authLogin = screen.getByTestId('auth-login');
    const authLogout = screen.queryByTestId('auth-logout');

    expect(authLogin).toBeInTheDocument();
    expect(authLogout).not.toBeInTheDocument();
  });

  it('renders AuthLogout component when logged in', () => {
    render(
      <AuthContext.Provider value={{
        isLoggedIn: true,
        token: 'mockToken',
        login: () => {},
        logout: () => {},
      }}>
        <Auth />
      </AuthContext.Provider>
    );

    const authLogin = screen.queryByTestId('auth-login');
    const authLogout = screen.getByTestId('auth-logout');

    expect(authLogin).not.toBeInTheDocument();
    expect(authLogout).toBeInTheDocument();
  });

  it('renders blue block', () => {
    render(<Auth />);

    const blueBlock = screen.getByTestId('blue-block');

    expect(blueBlock).toBeInTheDocument();
  });
});