const PricingCard = ({ title, price, features }: { title: string; price: string; features: string[] }) => (
  <div className="border border-gray-700 rounded-lg p-6 flex flex-col">
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-4xl font-extrabold mb-4">{price}</p>
    <ul className="text-gray-400 mb-6 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
      Wybierz plan
    </button>
  </div>
);

export default function PricingPage() {
  const plans = [
    { title: 'Free', price: '0 zł', features: ['1 projekt', 'Podstawowe statystyki', 'Wsparcie społeczności'] },
    { title: 'Pro', price: '49 zł', features: ['Do 10 projektów', 'Zaawansowane statystyki', 'Wsparcie email'] },
    { title: 'Enterprise', price: 'Kontakt', features: ['Nielimitowane projekty', 'Dedykowany manager', 'Wsparcie 24/7'] },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-8 pt-24">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold">Wybierz plan dla siebie</h1>
        <p className="text-lg text-gray-400 mt-2">Proste i przejrzyste ceny, bez ukrytych opłat.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </main>
  );
} 