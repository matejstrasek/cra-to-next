import { render, screen } from '@testing-library/react';
import App from './App';

test('renders mikko', () => {
  render(<App />);
  const mikkoElement = screen.getByText(/mikko/i);
  expect(mikkoElement).toBeInTheDocument();
});
