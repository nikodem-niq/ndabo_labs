import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center p-8 pt-24">
      <section className="w-full max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Zautomatyzuj Swój Sukces z Naszymi Narzędziami
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Odkryj potęgę CI/CD i Git w swoim projekcie. Zacznij budować, testować i wdrażać z niespotykaną dotąd łatwością.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
          Rozpocznij teraz
        </button>
      </section>
    </main>
  );
}
