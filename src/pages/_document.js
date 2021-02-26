import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#000" />

          <meta
            name="description"
            content="Find news that challenge your existing biases and believes in order for everyone to break out of their news bubble and in the end to foster understanding of opposing political views."
          />
          <meta
            name="keywords"
            content="sided, news, sri lanka, political, media, bias, sports"
          />
          <meta charSet="utf-8" />

          {/* Open Graph */}
          <meta property="og:url" content={`https://sided.news/`} />
          <meta
            property="og:title"
            content="sided.news - Other side of the spectrum."
            key="ogtitle"
          />
          <meta
            property="og:description"
            content="Find news that challenge your existing biases and believes in order for everyone to break out of their news bubble and in the end to foster understanding of opposing political views."
            key="ogdesc"
          />
          <meta
            property="og:image"
            content="https://sided.news/og.png"
            key="ogtitle"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
