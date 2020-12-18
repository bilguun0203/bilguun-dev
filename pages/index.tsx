import Link from 'next/link';
import HeadElem from '../components/head';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="flex flex-col h-screen text-center">
      <HeadElem />

      <main className="container mx-auto flex-grow h-full flex items-center justify-center flex-col">
        <p className="text-6xl font-light text-gray-dark dark:text-gray-light">
          Hello,
        </p>
        <p className="mt-1 text-6xl">I'm Bilguun</p>
        <div className="my-12 font-mono text-lg">
          <Link href="https://projects.bilguun.dev">
            <a className="text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-200 underline">
              Projects
            </a>
          </Link>{' '}
          <span className="text-base text-gray">/</span>{' '}
          <Link href="/about">
            <a className="text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-200 underline">
              About Me
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
