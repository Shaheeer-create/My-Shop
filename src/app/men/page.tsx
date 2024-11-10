// pages/men.js

import MenSection from '@/components/men';
import Head from 'next/head';

export default function Men() {
  return (
    <div>
      <Head>
        <title>Men's Collection</title>
        <meta name="description" content="Explore our modern and stylish men's collection." />
      </Head>
      <MenSection />
    </div>
  );
}
