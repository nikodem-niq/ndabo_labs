'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { email?: string; message?: string } = {};
    
    if (!email) {
      newErrors.email = 'Adres email jest wymagany';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Proszę podać poprawny adres email';
    }

    if (!message) {
      newErrors.message = 'Wiadomość jest wymagana';
    }
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      // Tutaj w przyszłości można dodać logikę wysyłania danych na serwer
      console.log('Formularz wysłany:', { email, message });
    }
  };

  if (submitted) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Dziękujemy za wiadomość!</h1>
          <p>Odezwiemy się najszybciej jak to możliwe.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black p-8">
      <div className="w-full max-w-md p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Kontakt</h1>
          <p className="text-gray-600 mt-2">Masz pytanie? Napisz do nas.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="twoj@email.com"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Twoja wiadomość..."
              rows={5}
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
          >
            Wyślij
          </button>
        </form>
      </div>
    </main>
  );
} 