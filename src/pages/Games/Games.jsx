import { getGames } from 'api/api';
import Game from 'components/Game/Game';
import { useQuery } from 'react-query';
import { Container, Title } from './Games.styled';

const Games = () => {
  const { data } = useQuery('coins', getGames);
  console.log(data);
  return (
    <Container>
      <Title>
        {data?.map(e => (
          <Game
            _id={e._id}
            genre={e.genre}
            gameImage={e.gameImage}
            gameDescription={e.gameDescription}
            commonGameName={e.commonGameName}
          />
        ))}
      </Title>
    </Container>
  );
};

export default Games;
