import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plantList, setPlantList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
      .then((res) => res.json())
      .then((listOfPlants) => setPlantList(listOfPlants))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="app">
      <Header />
      <PlantPage plantList={plantList} />
    </div>
  );
}

export default App;
