import { UlVitrine } from "./style";

export const Cards = ({ characterList }) => {
  return (
    <UlVitrine>
      {characterList.results &&
        characterList.results.map((cards) => {
          return (
            <li key={cards.id}>
              <h4>{cards.name}</h4>
              <figure>
                <img src={cards.image} alt="" />
              </figure>
            </li>
          );
        })}
    </UlVitrine>
  );
};
