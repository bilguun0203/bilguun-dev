import Head from 'next/head';

export default function HeadElem(props) {
  return (
    <Head>
      <title>Bilguun {props.title ? ' - ' + props.title : ''}</title>
      <link rel="icon" href="/icon.png" />
      <meta
        name="title"
        content={props.title ? 'Bilguun - ' + props.title : 'Bilguun'}
      />
      <meta name="description" content="Bilguun's personal website" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </Head>
  );
}
