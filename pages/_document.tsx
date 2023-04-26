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
      <Html lang="en">
        <Head></Head>
        <body className="font-sans">
          <Main />
          <NextScript />
          {process.env.WEBSITE_ANALYTICS_ID ? (
            <script
              async
              defer
              data-website-id={process.env.WEBSITE_ANALYTICS_ID}
              src="https://analytics.bilguun.dev/script.js"
            ></script>
          ) : null}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
