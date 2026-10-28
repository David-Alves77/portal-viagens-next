
import CardDestino from "../components/CardDestino";
import { destinos } from "../data/destinos";
import styles from "./page.module.css";

export default function DestinosPage() {
  return (
    <section className={styles.container}>
      <h2>ConheÃ§a nossos destinos</h2>

      <p className={styles.descricao}>
        Escolha seu prÃ³ximo destino e prepare-se
        para uma experiÃªncia inesquecÃ­vel!
      </p>

      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino
            key={destino.id}
            destino={destino}
          />
        ))}
      </div>
    </section>
  );
}

