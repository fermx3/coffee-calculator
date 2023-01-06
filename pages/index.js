import Head from "next/head";
import Calculator from "../components/calculator.component";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Ratio Calculator</title>
        <meta name="description" content="This is a coffee ratio calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Coffee Calculator</h1>
        <Calculator />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
