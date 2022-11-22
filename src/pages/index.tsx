import React from 'react'
import Head from 'next/head';
import Timezone from '../components/timezone';
import CheersGif from '../components/CheersGif';
import { GifResult, GiphyFetch } from '@giphy/js-fetch-api';
import { IGif } from '@giphy/js-types';

const giphyFetch = new GiphyFetch(process.env.NEXT_PUBLIC_GIPHY_KEY);

export const getServerSideProps = async () => {
  const { data }: GifResult = await giphyFetch.random({ tag: "cheers" })
  return {
    props: {
      gif: data
    }
  }
}

const Home = ({ gif }: { gif: IGif }) => {
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
      <div className="flex flex-col h-screen items-center justify-center">
        <Timezone />
        <CheersGif gif={gif} />
      </div>
    </div>
  );
}

export default Home
