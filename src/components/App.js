import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plantList, setPlantList] = useState([]);
  const [newPlantName, setNewPlantName] = useState("");
  const [newPlantImage, setNewPlantImage] = useState("");
  const [newPlantPrice, setNewPlantPrice] = useState("");
  const [searchText, setSearchText] = useState("");

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

  function searchForPlant(searchText) {
    const filteredListBySearch = plantList.filter((plant) =>
      plant.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setPlantList(filteredListBySearch);
  }

  function removePlant(plantID) {
    const updatedList = plantList.filter((plant) => plant.id !== plantID);
    setPlantList(updatedList);

    fetch(`http://localhost:6001/plants/${plantID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
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
        searchText={searchText}
        setSearchText={setSearchText}
        searchForPlant={searchForPlant}
        removePlant={removePlant}
      />
    </div>
  );
}

export default App;
