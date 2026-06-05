import React from 'react';

import { render, screen } from '../../utils/tests';
import Header from '.';

jest.mock('next/image', () => ({
  __esModule: true,
  default: function MockImage({ src, alt }: { src: string; alt: string }): React.ReactElement {
    // eslint-disable-next-line @next/next/no-img-element -- test mock for next/image
    return <img src={src} alt={alt} data-testid="header-logo" />;
  },
}));

describe('Header', () => {
  it('renders the header', () => {
    render(<Header />);
    expect(screen.getByTestId('header-logo')).toBeInTheDocument();
  });

  it('renders the KG logo image with correct alt text', () => {
    render(<Header />);
    const img = screen.getByRole('img', { name: /kg logo/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/kurt-geiger-logo.png');
  });

  it('renders logo inside a container with expected structure', () => {
    const { container } = render(<Header />);
    const wrapper = container.firstChild;
    expect(wrapper).toBeInTheDocument();
    expect(screen.getByTestId('header-logo')).toBeInTheDocument();
  });
});
