import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="dark" lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-sans bg-gray-lightest dark:bg-gray-darkest text-gray-darkest dark:text-gray-lightest">
          <Main />
          <NextScript />
          <script
            async
            defer
            data-website-id="b090b0a6-539d-4b3c-b7ed-42a54e0492f3"
            src="https://analytics.bilguun.dev/umami.js"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
