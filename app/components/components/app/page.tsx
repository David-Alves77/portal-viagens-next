
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <h2>Explore o mundo com a gente!</h2>

      <p>
        Descubra destinos incríveis, conheça novos lugares
        e planeje sua próxima aventura com nosso portal
        de viagens.
      </p>

      <Link href="/destinos" className={styles.button}>
        Explorar destinos
      </Link>
    </section>
  );
}
