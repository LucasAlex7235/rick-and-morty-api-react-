import styles from "./style/global.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { Title } from "./components/Characters";
import { Cards } from "./components/CharCard";

function App() {
  const [characterList, setcharacterList] = useState([]);

  document.title = "Rick and morty";

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then((res) => setcharacterList(res))
      .catch((err) => console.log(err));
  }, []);
  const cards = () => {};

  return (
    <div className={`${styles.reset}`}>
      <Title>
        <Cards characterList={characterList} />
      </Title>
    </div>
  );
}

export default App;
