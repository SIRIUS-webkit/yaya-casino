import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="title" content="Yaya Casino" />
          <meta
            name="description"
            content="Explore a thrilling world of online casino games at Yaya Casino. Enjoy a wide range of games, exciting bonuses, and a secure gaming environment. Join now for an unforgettable gaming experience."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io/" />
          <meta property="og:title" content="Yaya Casino" />
          <meta
            property="og:description"
            content="Explore a thrilling world of online casino games at Yaya Casino. Enjoy a wide range of games, exciting bonuses, and a secure gaming environment. Join now for an unforgettable gaming experience."
          />
          <meta
            property="og:image"
            content="https://metatags.io/images/meta-tags.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta property="twitter:title" content="Yaya Casino" />
          <meta
            property="twitter:description"
            content="Explore a thrilling world of online casino games at Yaya Casino. Enjoy a wide range of games, exciting bonuses, and a secure gaming environment. Join now for an unforgettable gaming experience."
          />
          <meta
            property="twitter:image"
            content="https://metatags.io/images/meta-tags.png"
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
