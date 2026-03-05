import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the navbar brand with site title', () => {
  render(<App />);
  const brandLinks = screen.getAllByText(/ReactSite/i);
  expect(brandLinks.length).toBeGreaterThan(0);
});

test('renders navigation links in the navbar', () => {
  render(<App />);
  const nav = screen.getByRole('navigation');
  expect(nav).toBeInTheDocument();
  expect(nav).toHaveTextContent(/Home/i);
  expect(nav).toHaveTextContent(/About/i);
  expect(nav).toHaveTextContent(/Dashboard/i);
  expect(nav).toHaveTextContent(/Contact/i);
});

test('renders home page hero text', () => {
  render(<App />);
  expect(screen.getByText(/Welcome to ReactSite/i)).toBeInTheDocument();
});
