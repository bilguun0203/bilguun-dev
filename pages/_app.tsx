import '../styles/globals.css';
import '../styles/style.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@techyonx/pro-regular-svg-icons';
import { fab } from '@techyonx/pro-brands-svg-icons';
import type { AppProps } from 'next/app';

library.add(far);
library.add(fab);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
