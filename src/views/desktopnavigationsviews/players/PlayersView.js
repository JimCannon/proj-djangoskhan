import { useState, useEffect } from "react";
import StarWarsAPIService from "../../../shared/api/service/StarWarsAPIService";

export const PlayersView = () => {
  const [starwarsData, setStarswarsData] = useState();
  const [count, setCount] = useState(1);

  const unableCountToGetBelow1 = () => {
    count <= 1 ? setCount(1) : setCount(count - 1);
  };

  const getDataFromStarWarsAPI2 = async () => {
    try {
      const response = await StarWarsAPIService.getStarWarsCharacter(count);
      setStarswarsData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataFromStarWarsAPI2();
  }, [count]);

  return (
    <div>
      <h1>Name: {starwarsData?.data?.name}</h1>
      <h1>Birth Year: {starwarsData?.data?.birth_year}</h1>
      <h1>Height: {starwarsData?.data?.height}</h1>
      <h1>Weight: {starwarsData?.data?.mass}</h1>
      <h1>Gender: {starwarsData?.data?.gender}</h1>
      <button onClick={() => unableCountToGetBelow1()}>
        Get previous character
      </button>
      <button onClick={() => setCount(count + 1)}>Get next chracter</button>
      {console.log(count)}
    </div>
  );
};
