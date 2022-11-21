import React from 'react'
import Head from 'next/head';
import Timezone from '../components/timezone';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Five O'Clock Somewhere</title>
          <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
          <link rel="manifest" href="favicon/site.webmanifest" />
          <meta name="theme-color" content="black" media="(prefers-color-scheme: dark)" />

      </Head>
      <Timezone />
    </div>
  );
}

export default Home
