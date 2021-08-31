import Head from "next/head";

import React from "react";

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />

      <title>{title}</title>

      <link rel="manifest" href="/manifest.json" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Just Books",
  keywords: "Book Library, Renting",
  description: "A large variety of books and stuff",
};

export default Meta;
