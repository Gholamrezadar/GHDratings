import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>GHDratings | Naruto & Naruto Shippuden</title>
        <meta name="description" content="My tvcharts alternative for Naruto & Naruto Shippuden" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
