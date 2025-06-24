import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("dark");
    if (stored === "true") setDarkMode(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("dark", String(darkMode));
  }, [darkMode]);

  return (
    <>
      <Head>
        <title>FotbollTransfers24</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">⚽️ FotbollTransfers24</h1>
        <p className="mb-4">Senaste rykten & bekräftade övergångar</p>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-yellow-300 dark:text-black"
        >
          Växla Dark Mode
        </button>
      </main>
    </>
  );
}
