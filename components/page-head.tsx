import Head from "next/head";

export const PageHead = () => {
  return (
    <Head>
      <title>One factura</title>
      <meta name="description" content="one factura test project" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300&family=Source+Code+Pro:wght@200&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};
