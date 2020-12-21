import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="dark" lang="en">
        <Head></Head>
        <body className="font-sans bg-gray-lightest dark:bg-gray-darkest text-gray-darkest dark:text-gray-lightest">
          <Main />
          <NextScript />
          {process.env.WEBSITE_ANALYTICS_ID ? (
            <script
              async
              defer
              data-website-id={process.env.WEBSITE_ANALYTICS_ID}
              src="https://analytics.bilguun.dev/umami.js"
            ></script>
          ) : null}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
