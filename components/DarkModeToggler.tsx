import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEclipseAlt, faCircle } from '@techyonx/pro-duotone-svg-icons';
import { useState } from 'react';

export default function DarkModeToggler({ darkMode, toggleDarkMode }) {
  const [clickEffect, setClickEffect] = useState(false);

  const toggle = () => {
    setClickEffect(true);
    setTimeout(() => {
      setClickEffect(false);
    }, 700);
    toggleDarkMode();
  };
  return (
    <a
      onClick={toggle}
      className="fixed right-0 top-0 cursor-pointer text-xl opacity-60 hover:opacity-100 m-2"
      aria-label="toggle dark mode"
    >
      <span className="fa-stack" style={{ verticalAlign: 'top' }}>
        {clickEffect ? (
          <FontAwesomeIcon
            icon={faCircle}
            className="fa-stack-1x animate-ping text-blue-500 dark:text-yellow-500"
          />
        ) : null}
        {darkMode ? (
          <FontAwesomeIcon
            icon={faEclipseAlt}
            className="fa-stack-1x text-yellow-500"
            swapOpacity
          />
        ) : (
          <FontAwesomeIcon
            icon={faEclipseAlt}
            className="fa-stack-1x text-blue-500"
          />
        )}
      </span>
    </a>
  );
}
