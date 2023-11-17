import axios from 'axios';

axios.defaults.baseURL = 'https://api.miraplay.cloud/games/by_page';

export const getGames = async () => {
  const { data } = await axios.post({
    data: {
      page: 1,
      isFreshGamesFirst: true,
      genre: 'ALL',
      gamesToShow: 9,
    },
  });
  return data;
};
