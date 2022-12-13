import styles from "./index.module.scss";

const Card = ({ info }) => {
  const { title, name, photo, price } = info;
  const { rate, olfatto, color, ep, efferv } = info.reviews[0];
  const { body } = info?.comments[0];

  return (
    <>
      <div className={styles.bg}>
        <div className={styles.Card}>
          <div
            className={styles.photo}
            style={{ backgroundImage: `url(${photo})` }}
          ></div>
          <div className={styles.info}>
            <div className={styles.title}>
              <h2>{title}</h2>
              <div className={styles.info2}>
                <p>{name}</p>
                <p>
                  <span>Voto </span>
                  {rate}/10
                </p>
              </div>
            </div>
            <div className={styles.price}>
              <h2>Prezzo</h2>
              <p>{price}</p>
            </div>
            <div className={styles.addBtn}>
              <button>Aggiungi</button>
            </div>
          </div>
        </div>
        <div className={styles.review}>
          <h2>Recensioni</h2>
          <div>
            <p>Olfatto:</p>
            <p>{olfatto}/10</p>
          </div>
          <div>
            <p>Colore:</p>
            <p>{color}/10</p>
          </div>
          <div>
            <p>Experience / Prezzo:</p>
            <p>{ep}/10</p>
          </div>
          <div>
            <p>Effervescienza: </p>
            <p>{efferv}/10</p>
          </div>
          <div>
            <p>Commento: </p>
            <p>{body}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
