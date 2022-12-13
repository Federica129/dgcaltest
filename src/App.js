import styles from "./App.module.scss";

import Card from "./components/card";
import { useEffect, useState, useCallback } from "react";

function App() {
  const [info, setInfo] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3000/wine/${id}`)
      .then((res) => res.json())
      .then((wine) => setInfo([wine]));
  }, [id]);
  console.log(info);

  const Next = useCallback(() => {
    setId(id + 1);
  }, [id]);

  const Prev = useCallback(() => {
    setId(id - 1);
  }, [id]);

  return (
    <div className={styles.App}>
      <h1>Test DGCAL</h1>
      <div>
        {info.length > 0 && <Card info={info} />}
        <div className={styles.btn}>
          <button onClick={() => Prev()} disabled={id === 1}>
            {"<"}
          </button>
          <p>{info[0]?.id}</p>
          <button onClick={() => Next()} disabled={id === 3}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
