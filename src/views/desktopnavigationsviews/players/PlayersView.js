import { useState, useEffect } from "react";
import Axios from "axios";

export const PlayersView = () => {
  const [starwarsData, setStarswarsData] = useState();

  const getDataFromStarWarsAPI = () => {
    Axios.get("https://swapi.dev/api/people/4")
      .then((response) => setStarswarsData(response))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getDataFromStarWarsAPI();
  }, []);

  return (
    <div>
      <h1>This is the Players page.</h1>
      <button onClick={() => console.log(starwarsData)}>
        Test StarWars API
      </button>
    </div>
  );
};
