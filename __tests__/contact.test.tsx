import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactPage from '../app/app/contact/page';

describe('Strona Kontaktowa', () => {
  
  beforeEach(() => {
    render(<ContactPage />);
  });

  it('powinna poprawnie renderować formularz kontaktowy', () => {
    expect(screen.getByRole('heading', { name: /Kontakt/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/twoj@email.com/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Twoja wiadomość.../i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Wyślij/i })).toBeInTheDocument();
  });

  describe('Gdy użytkownik wysyła formularz z błędami', () => {
    it('powinien wyświetlić błędy dla pustych pól', async () => {
      fireEvent.click(screen.getByRole('button', { name: /Wyślij/i }));

      await waitFor(() => {
        expect(screen.getByText(/Adres email jest wymagany/i)).toBeInTheDocument();
        expect(screen.getByText(/Wiadomość jest wymagana/i)).toBeInTheDocument();
      });
    });

    it('powinien wyświetlić błąd dla niepoprawnego formatu email', async () => {
      fireEvent.change(screen.getByPlaceholderText(/twoj@email.com/i), { target: { value: 'niepoprawny-email' } });
      fireEvent.change(screen.getByPlaceholderText(/Twoja wiadomość.../i), { target: { value: 'Testowa wiadomość' } });
      fireEvent.click(screen.getByRole('button', { name: /Wyślij/i }));

      await waitFor(() => {
        expect(screen.getByText(/Proszę podać poprawny adres email/i)).toBeInTheDocument();
      }, { timeout: 2000 });
    });
  });

  describe('Gdy użytkownik wysyła poprawny formularz', () => {
    it('powinien wyświetlić komunikat o pomyślnym wysłaniu', async () => {
      fireEvent.change(screen.getByPlaceholderText(/twoj@email.com/i), { target: { value: 'test@example.com' } });
      fireEvent.change(screen.getByPlaceholderText(/Twoja wiadomość.../i), { target: { value: 'To jest testowa wiadomość.' } });
      fireEvent.click(screen.getByRole('button', { name: /Wyślij/i }));

      await waitFor(() => {
        expect(screen.getByText(/Dziękujemy za wiadomość!/i)).toBeInTheDocument();
      });
    });
  });
}); 