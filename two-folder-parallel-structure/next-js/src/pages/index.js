import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Home from '../components/Home';

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Next JS</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/cats">Cats</Link>
          </li>
          <li>
            <Link href="/dogs">Dogs</Link>
          </li>
        </ul>

        <hr />
        <Home />
      </main>
    </div>
  );
}
