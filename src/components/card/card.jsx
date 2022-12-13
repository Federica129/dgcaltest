import styles from "./index.module.scss";

const Card = ({ info }) => {
  const { title, name, photo, price } = info[0];
  const { rate, olfatto, color, ep, efferv } = info[0].reviews[0];
  const { body } = info[0]?.comments[0];

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
              <h1>{title}</h1>
              <div className={styles.info2}>
                <p>{name}</p>
                <p>
                  <span>Voto </span>
                  {rate}/10
                </p>
              </div>
            </div>
            <div className={styles.price}>
              <h1>Prezzo</h1>
              <p>{price}</p>
            </div>
            <div className={styles.addBtn}>
              <button>Aggiungi</button>
            </div>
          </div>
        </div>
        <div className={styles.review}>
          <h1>Recensioni</h1>
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
