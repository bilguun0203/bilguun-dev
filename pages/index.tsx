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
        <div className="nav-container">
          <Link href="/projects">
            <a className="nav-link">
              {'<'} Projects {'>'}
            </a>
          </Link>{' '}
          <span className="nav-sep">/</span>{' '}
          <Link href="/about">
            <a className="nav-link">
              {'<'} About Me {'>'}
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
