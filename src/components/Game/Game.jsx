import { Item, WrapperDescription, WrapperImg } from './Game.styled';

// _id:'65154bae59c15dd8d5497a64'
// commonGameName:"Rust"
// gameDescription: "Rust — комп'ютерна гра в жанрі симулятора виживання була створена неза…"
// gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/252490/capsule_616x353.j…"
// genre: "SURVIVAL",
// inTop: true

const Game = ({ _id, genre, gameImage, gameDescription, commonGameName }) => {
  return (
    <Item key={_id}>
      <h3>{genre}</h3>
      <WrapperImg>
        <img src={gameImage} alt={gameDescription} />
      </WrapperImg>
      <WrapperDescription>
        <p>{commonGameName}</p>
        <p>{gameDescription}</p>
      </WrapperDescription>
    </Item>
  );
};

export default Game;
