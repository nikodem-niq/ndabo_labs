import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PricingPage from '../app/app/pricing/page';

describe('Pricing Page', () => {
  it('should render the pricing page with a heading', () => {
    render(<PricingPage />);
    expect(screen.getByRole('heading', { name: /Wybierz plan dla siebie/i })).toBeInTheDocument();
  });
}); 