import Link from 'next/link';
import HeadElem from '../components/head';
import Footer from '../components/footer';

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen text-center">
      <HeadElem />

      <main className="container mx-auto flex-grow h-full flex items-center justify-center flex-col">
        <p className="text-6xl font-light text-red-500 dark:text-red-400">
          ERROR 404
        </p>
        <p className="text-3xl font-light text-gray-dark dark:text-gray-light">
          Page Not Found
        </p>
        <div className="nav-container">
          <Link href="/">
            <a className="nav-link">
              {'<'} Back to Homepage {'>'}
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}