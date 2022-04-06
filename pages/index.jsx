import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PropReturns - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Exercise with <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <Link href="/onboarding">
            <a className={styles.card}>
              <h2>Onboarding &rarr;</h2>
              <p className='text-slate-400'>Click to view</p>
            </a>
          </Link>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>GitHub Repo &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p className='font-bold'>
          Created By Maharshi Shah
        </p>
      </footer>
    </div>
  )
}
