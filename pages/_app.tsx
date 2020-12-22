import '../styles/globals.css';
import '../styles/style.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import DarkModeToggler from '../components/DarkModeToggler';

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const lsDarkMode = window.localStorage.getItem('darkMode');
    if (lsDarkMode === 'false') {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  });

  const toggleDarkMode = () => {
    window.localStorage.setItem('darkMode', (!darkMode).toString());
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Component {...pageProps} />
      <DarkModeToggler darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default MyApp;
