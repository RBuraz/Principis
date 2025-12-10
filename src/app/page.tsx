import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="max-w-3xl p-6 text-center">
        
        <Image
          src="/principis-logo.png"
          alt="Principis Logo"
          width={150}
          height={150}
          className="mx-auto mb-6"
        />
        <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-100">
          Welcome to Principis
        </h1>
        <p className="mb-6 text-lg text-zinc-700 dark:text-zinc-300">
          Your gateway to modern web development with Next.js and Tailwind CSS.
        </p>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-zinc-900 px-6 py-3 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
