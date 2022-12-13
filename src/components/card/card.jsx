import styles from "./index.module.scss";

const Card = ({ info }) => {
  return (
    <>
      <div className={styles.bg}></div>
      <div className={styles.Card}>
        <div
          className={styles.photo}
          style={{ backgroundImage: `url(${info[0]?.photo})` }}
        ></div>
        <div className={styles.info}>
          <div className={styles.title}>
            <h1>{info[0]?.title}</h1>
            <p>{info[0]?.name}</p>
          </div>
          <div className={styles.price}>
            <h1>Prezzo</h1>
            <p>{info[0]?.price}</p>
          </div>
          <div className={styles.addBtn}>
            <button>Aggiungi</button>
          </div>
        </div>
        <div className={styles.review}>
          <h1>Recensioni</h1>
          <div>
            <p>Olfatto: </p>
            <p>{info[0]?.reviews[0]?.olfatto}/10 </p>
          </div>
          <div>
            <p>Colore: </p>
            <p>{info[0]?.reviews[0]?.color}/10 </p>
          </div>
          <div>
            <p>Experience / Prezzo: </p>
            <p>{info[0]?.reviews[0]?.ep}/10 </p>
          </div>
          <div>
            <p>Effervescienza: </p>
            <p>{info[0]?.reviews[0]?.efferv}/10 </p>
          </div>
          <div>
            <p>Commento: </p>
            <p>{info[0]?.comments[0]?.body}</p>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
