import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex flex-col">
        <h1 className="text-4xl font-bold text-center mb-4">
          Witaj w moim projekcie!
        </h1>
        <p className="text-lg text-center">
          To jest strona startowa projektu zaliczeniowego z przedmiotu "Narzędzia do automatyzacji budowy oprogramowania".
        </p>
      </div>
    </main>
  );
}
