import axios from 'axios';

// axios.defaults.baseURL = 'https://api.miraplay.cloud/games/by_page';
axios.defaults.baseURL = 'https://api.miraplay.cloud/games';

// const body = {
//   page: 1,
//   isFreshGamesFirst: true,
//   genre: 'ALL',
//   gamesToShow: 9,
// };

export const getGames = async () => {
  const { data } = await axios();
  console.log(data);
  return data;
};
