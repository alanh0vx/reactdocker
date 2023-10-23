import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders learn react link', () => {
  render(<Home />);

  // Check if there hello text
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();

  // Check if the image exists (by alt text)
  const imgElement = screen.getByAltText(/logo/i);
  expect(imgElement).toBeInTheDocument();
});
