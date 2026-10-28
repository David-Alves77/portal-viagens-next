
import type { Destino } from "../data/destinos";
import styles from "./CardDestino.module.css";

interface CardDestinoProps {
  destino: Destino;
}

export default function CardDestino({
  destino
}: CardDestinoProps) {
  return (
    <article className={styles.card}>
      <img
        src={destino.imagem}
        alt={`Imagem de ${destino.nome}`}
        className={styles.imagem}
        loading="lazy"
      />

      <div className={styles.conteudo}>
        <h3>{destino.nome}</h3>
        <p>{destino.descricao}</p>
      </div>
    </article>
  );
}
