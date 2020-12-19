import Link from 'next/link';
import HeadElem from '../components/head';
import Footer from '../components/footer';

export default function Error({ statusCode }) {
  return (
    <div className="flex flex-col h-screen text-center">
      <HeadElem />

      <main className="container mx-auto flex-grow h-full flex items-center justify-center flex-col">
        <p className="text-6xl font-light text-gray-dark dark:text-gray-light">
          {statusCode
            ? `ERROR ${statusCode}`
            : 'An error occurred on client'}
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

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
