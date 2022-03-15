import Link from 'next/link';
import HeadElem from '../components/head';
import Footer from '../components/footer';

export default function About() {
  return (
    <div className="base-style">
      <HeadElem title="About Me" />

      <main className="container mx-auto flex-grow h-full flex items-center justify-center flex-col">
        <p className="text-4xl md:text-6xl font-sans font-light mb-4 mt-10">
          Bilguun Ochirbat
        </p>

        <p className="about-header">- WORK EXPERIENCE -</p>
        <div className="about-item">
          <p className="about-title">Software Engineer</p>
          <p className="about-year">(2021-*)</p>
          <div className="about-desc">
            <p>SendMN NBFI LLC</p>
          </div>
        </div>
        <div className="about-item">
          <p className="about-title">Machine Learning Engineer</p>
          <p className="about-year">(2019-2021)</p>
          <div className="about-desc">
            <p>Onch Data LLC</p>
          </div>
        </div>

        <p className="about-header">- EDUCATION -</p>
        <div className="about-item">
          <p className="about-title">Bachelor of Computer Science</p>
          <p className="about-year">(2015-2019)</p>
          <div className="about-desc">
            <p>School of Engineering and Applied Science</p>
            <p>National University of Mongolia</p>
          </div>
        </div>

        <p className="about-header">- EMAIL -</p>
        <p className="mt-2 font-mono text-lg">
          <a href="mailto:hello@bilguun.dev" className="link">
            hello@bilguun.dev
          </a>
        </p>
        <p className="about-header">- GITHUB -</p>
        <p className="mt-2 font-mono text-lg">
          <a href="https://github.com/bilguun0203" className="link">
            github.com/bilguun0203
          </a>
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
