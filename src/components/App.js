import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plantList, setPlantList] = useState([]);
  const [newPlantName, setNewPlantName] = useState("");
  const [newPlantImage, setNewPlantImage] = useState("");
  const [newPlantPrice, setNewPlantPrice] = useState("");

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
      .then((res) => res.json())
      .then((listOfPlants) => setPlantList(listOfPlants))
      .catch((error) => console.log(error.message));
  }, []);

  function addNewPlant(newPlantName, newPlantImage, newPlantPrice) {
    //submit new plant data to PlantList to render on page
    const listOfIDs = plantList.map((plant) => plant.id).sort();
    const previousPlantID = listOfIDs.pop();
    const newPlantID = parseInt(previousPlantID) + 1;

    const updatedPlantList = [
      ...plantList,
      {
        name: newPlantName,
        image: newPlantImage,
        price: newPlantPrice,
        id: newPlantID,
      },
    ];

    setPlantList(updatedPlantList);

    //POST request to save new plant to db
    fetch(`http://localhost:6001/plants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: newPlantName,
        image: newPlantImage,
        price: newPlantPrice,
        id: newPlantID,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error.message));
  }

  return (
    <div className="app">
      <Header />
      <PlantPage
        plantList={plantList}
        newPlantName={newPlantName}
        setNewPlantName={setNewPlantName}
        newPlantImage={newPlantImage}
        setNewPlantImage={setNewPlantImage}
        newPlantPrice={newPlantPrice}
        setNewPlantPrice={setNewPlantPrice}
        addNewPlant={addNewPlant}
      />
    </div>
  );
}

export default App;
