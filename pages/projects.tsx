import Link from 'next/link';
import { useState, useEffect } from 'react';
import HeadElem from '../components/head';
import Footer from '../components/footer';

// function timeStr() {
//   const dt = new Date();
//   let time = '';
//   if (dt.getHours() < 10) {
//     time += '0' + dt.getHours();
//   } else {
//     time += '' + dt.getHours();
//   }
//   time += ':';
//   if (dt.getMinutes() < 10) {
//     time += '0' + dt.getMinutes();
//   } else {
//     time += '' + dt.getMinutes();
//   }
//   time += ':';
//   if (dt.getSeconds() < 10) {
//     time += '0' + dt.getSeconds();
//   } else {
//     time += '' + dt.getSeconds();
//   }
//   return time;
// }

export default function Projects(props) {
  // const dirs = props.projects.map((p) => p.slug);
  // dirs.push('');

  // const [time, setTime] = useState(timeStr());
  // const [dirIdx, setDirIdx] = useState(0);
  const [cursor, setCursor] = useState('_');
  const [projects, setProjects] = useState(props.projects);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (cursor === '_') {
        setCursor('');
      } else {
        setCursor('_');
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [cursor]);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setTime(timeStr());
  //   }, 1000);
  //   return () => clearTimeout(timeout);
  // }, [time]);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (dirIdx < dirs.length - 1) {
  //       setDirIdx(dirIdx + 1);
  //     } else {
  //       setDirIdx(0);
  //     }
  //   }, 2000);
  //   return () => clearTimeout(timeout);
  // }, [dirIdx]);

  useEffect(() => {
    if (keyword === '') {
      setProjects(props.projects);
    } else {
      setProjects(
        props.projects.filter((project) => project.keywords.includes(keyword))
      );
    }
  }, [keyword]);

  return (
    <div className="flex flex-col h-full text-center">
      <HeadElem title="Projects" />

      <main className="container mx-auto max-w-4xl">
        <div className="mx-4">
          <p className="text-4xl md:text-6xl font-sans font-light mb-8 mt-10 text-center">
            Projects
          </p>

          {/* Header command prompt */}
          <div className="font-mono text-left font-bold">
            <p>
              <span className="text-yellow-500">λ</span> in{' '}
              <span className="text-blue-500">
                <span className="hover:underline">
                  <Link href="/">~</Link>
                </span>
                /projects
              </span>
            </p>
            <p>
              <span className="text-emerald-500 dark:text-emerald-400">
                {'->'}
              </span>{' '}
              ls
              {keyword !== '' ? (
                <span>
                  {' '}
                  <span className="text-gray">|</span> grep{' '}
                  <span className="text-yellow-600">"{keyword}"</span>
                </span>
              ) : (
                ''
              )}
              {keyword !== '' ? (
                <span className="text-gray">
                  {' '}
                  (
                  <a
                    href="#"
                    className="text-red-700 hover:underline"
                    onClick={() => setKeyword('')}
                  >
                    × clear
                  </a>
                  )
                </span>
              ) : null}
              <span>{cursor}</span>
            </p>
            {/* <p>
            <span className="text-emerald-400">{'->'}</span> cd{' '}
            <span className="text-gray">{dirs[dirIdx]}</span>
            <span>{cursor}</span>
          </p> */}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8 text-left font-mono">
            {projects.map((project, idx) => (
              <div key={idx}>
                <div className="border-2 border-emerald-500 border-opacity-40 p-5 hover:border-opacity-100 shadow-md hover:shadow-lg transition-all">
                  {/* Title */}
                  <p>
                    <a
                      href={'/projects/' + project.slug}
                      className="text-lg font-bold border-b-2 border-emerald-500 border-opacity-40 hover:border-opacity-100"
                    >
                      {project.title}
                    </a>
                  </p>
                  {/* Keywords */}
                  <p className="text-sm text-gray mt-4">
                    {project.keywords.map((kword, idx) => (
                      <span key={idx}>
                        <a
                          className="text-emerald-700 dark:text-emerald-500 dark:text-opacity-60 hover:underline hover:text-opacity-100"
                          href="#"
                          onClick={() => setKeyword(kword)}
                        >
                          {kword}
                        </a>
                        {idx + 1 === project.keywords.length ? '' : ', '}
                      </span>
                    ))}
                  </p>
                  {/* Description */}
                  <p className="text-base text-gray-dark dark:text-gray-light mt-4 mb-8">
                    {project.description}
                  </p>
                  {/* Read more */}
                  <p>
                    <a
                      href={'/projects/' + project.slug}
                      className="text-emerald-600 dark:text-emerald-500 hover:underline"
                    >
                      Дэлгэрэнгүй {'->'}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="nav-container">
            <Link href="/">
              <a className="nav-link">
                {'<'} Back to Homepage {'>'}
              </a>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const fs = require('fs');
  const matter = require('gray-matter');
  const { v4: uuid } = require('uuid');

  const files = fs.readdirSync(`${process.cwd()}/contents/projects`, 'utf-8');

  const projects = files
    .filter((fn) => fn.endsWith('.md'))
    .map((fn) => {
      const path = `${process.cwd()}/contents/projects/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: 'utf-8',
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    })
    .sort((a, b) =>
      Date.parse(a.date) > Date.parse(b.date)
        ? -1
        : Date.parse(a.date) < Date.parse(b.date)
        ? 1
        : 0
    );
  return {
    props: { projects },
  };
}
