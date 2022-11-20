import React from 'react'
import Head from 'next/head';
import Timezone from '../components/timezone';

const Home = () => {
  return (
    <div>
      <Head>
        <title>🍻</title>
      </Head>
      <Timezone />
    </div>
  );
}

export default Home
