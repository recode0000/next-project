import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
    <Head>
      <title>トップページ</title>
      <meta name="description" content="" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="これはトップページ" />
    </Head>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <h1>Hello Next.js</h1>
    </div>
  );
}
