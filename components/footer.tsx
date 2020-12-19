import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@techyonx/pro-regular-svg-icons';
import { faGithub } from '@techyonx/pro-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="my-5 font-mono text-gray-dark dark:text-gray-light">
      <p>
        <a
          href="https://github.com/bilguun0203"
          className="footer-nav-link"
          target="_blank"
          rel="noreferrer"
          aria-label="github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>{' '}
        <span className="footer-nav-sep">/</span>{' '}
        <a
          href="mailto:hello@bilguun.dev"
          className="footer-nav-link"
          aria-label="email"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </p>
    </footer>
  );
}