// import libraries
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// components
import Firstname from "../components/Firstname";

// home
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tapply Frontend Challenge</title>
        <meta
          name="frontend challenge"
          content="awesome pre-employment challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image
          src="/chuckNorris.svg"
          alt="Chuck Norris Logo"
          width={250}
          height={250}
          className={styles.filterWhite}
        />
        <h1 className={styles.weLove}>We Love Chuck Norris Trivia</h1>
        <Firstname />
      </main>
    </div>
  );
}
