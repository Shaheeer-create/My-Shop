// pages/index.js

import Head from 'next/head';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="container">
      <Head>
        <title>Modern Home Page</title>
        <meta name="description" content="A modern, responsive, and animated homepage" />
      </Head>
      <main>
        <h1>Welcome to Our Modern Site</h1>
        <p>
          Discover our exclusive collection, designed with a blend of style, elegance, and comfort. Dive into our men’s and women’s sections for a unique shopping experience!
        </p>
        <Link href='/men'>
        <button>Explore Now</button>
        </Link>
      </main>
    </div>
  );
}
