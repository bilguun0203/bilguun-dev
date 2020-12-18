import Link from 'next/link';
import HeadElem from '../components/head';
import Footer from '../components/footer';

export default function About() {
  return (
    <div className=" flex flex-col h-screen text-center">
      <HeadElem title="About Me" />

      <main className="container mx-auto flex-grow h-full flex items-center justify-center flex-col">
        <p className="text-4xl md:text-6xl font-sans font-light mb-4">
          Bilguun Ochirbat
        </p>

        <div className="my-2 font-mono">
          <p className="font-bold text-lg">
            • Bachelor of Computer Science (2015-2019) •
          </p>
          <div className="font-light text-gray-light">
            <p>School of Engineering and Applied Science</p>
            <p>National University of Mongolia</p>
          </div>
        </div>

        <p className="mt-4 font-mono text-lg font-bold">- EMAIL -</p>
        <p className="mt-2 font-mono text-lg">
          <a
            href="mailto:hello@bilguun.dev"
            className="underline text-blue-400 hover:text-blue-200"
          >
            hello@bilguun.dev
          </a>
        </p>
        <div className="my-12 font-mono text-lg md:text-lg">
          <Link href="/">
            <a className="text-emerald-400 underline hover:text-emerald-200">
              Back to Homepage
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
