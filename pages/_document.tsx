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
