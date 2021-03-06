import http from "../StarWarsAPI";

const getDataLukeSkywalker = () => {
  return http.get("/people/1");
};

const getDataDarthVaderAKATheBoss = () => {
  return http.get("/people/4");
};

const getStarWarsCharacter = (characterNumber) => {
  return http.get(`/people/${characterNumber}`);
};

// eslint-disable-next-line
export default {
  getDataLukeSkywalker,
  getDataDarthVaderAKATheBoss,
  getStarWarsCharacter,
};
