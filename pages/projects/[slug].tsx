import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileArchive, faFilePowerpoint, faFilePdf, faDatabase } from '@techyonx/pro-regular-svg-icons';
import { faGithub, faGooglePlay } from '@techyonx/pro-brands-svg-icons';
import HeadElem from '../../components/head';
import Footer from '../../components/footer';
import 'highlight.js/styles/atom-one-dark.css';

library.add(faFileArchive);
library.add(faFilePdf);
library.add(faFilePowerpoint);
library.add(faDatabase);
library.add(faGithub);
library.add(faGooglePlay);

export default function Project(props) {
  return (
    <div className="base-style">
      <HeadElem title={'Project - ' + props.project.title} />

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
                /
                <span className="hover:underline">
                  <Link href="/projects">projects</Link>
                </span>
                /{props.project.slug}
              </span>
            </p>
            <p>
              <span className="text-emerald-400">{'->'}</span> cat README.md
            </p>
          </div>

          {/* Title */}
          <p className="text-2xl md:text-4xl font-mono font-bold mb-4 mt-10">
            {props.project.title}
          </p>

          {/* Content */}
          <div className="text-left text-lg font-mono project-content">
            <section
              dangerouslySetInnerHTML={{ __html: props.project.content }}
            ></section>
          </div>

          {/* Buttons */}
          {'buttons' in props.project ? (
            <div>
              <p className="text-xl font-mono font-bold text-emerald-700 dark:text-emerald-300 uppercase mt-6">
                - Хэрэгцээт холбоосууд -
              </p>
              <div className="mt-4 flex flex-shrink flex-wrap justify-center">
                {props.project.buttons.map((btn, idx) => (
                  <a
                    href={btn.link}
                    className="mx-2 my-1 py-2 px-4 border-2 font-mono text-gray-dark dark:text-gray-light border-red-500 dark:border-yellow-500 border-opacity-40 dark:border-opacity-30 uppercase hover:border-opacity-100 hover:text-gray-darkest dark:hover:text-gray-lightest transition-all"
                    key={idx}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={
                        typeof btn.icon === 'string'
                          ? ['far', btn.icon]
                          : btn.icon
                      }
                    />{' '}
                    {btn.name}
                  </a>
                ))}
              </div>
            </div>
          ) : null}

          {/* Footer */}
          <div className="nav-container">
            <Link href="/projects">
              <a className="nav-link">
                {'<'} Back to Projects {'>'}
              </a>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const fs = require('fs');
  const html = require('remark-html');
  const highlight = require('remark-highlight.js');
  const unified = require('unified');
  const markdown = require('remark-parse');
  const matter = require('gray-matter');

  const slug = context.params.slug;
  const path = `${process.cwd()}/contents/projects/${slug}.md`;

  const rawContent = fs.readFileSync(path, {
    encoding: 'utf-8',
  });

  const { data, content } = matter(rawContent);

  const result = await unified()
    .use(markdown)
    .use(highlight)
    .use(html)
    .process(content);

  return {
    props: {
      project: {
        ...data,
        content: result.toString(),
      },
    },
  };
}

export async function getStaticPaths(context) {
  const fs = require('fs');

  const path = `${process.cwd()}/contents/projects`;
  const files = fs.readdirSync(path, 'utf-8');

  const markdownFileNames = files
    .filter((fn) => fn.endsWith('.md'))
    .map((fn) => fn.replace('.md', ''));

  return {
    paths: markdownFileNames.map((fileName) => {
      return {
        params: {
          slug: fileName,
        },
      };
    }),
    fallback: false,
  };
}
