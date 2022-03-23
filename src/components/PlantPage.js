import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({
  plantList,
  newPlantName,
  setNewPlantName,
  newPlantImage,
  setNewPlantImage,
  newPlantPrice,
  setNewPlantPrice,
  addNewPlant,
}) {
  return (
    <main>
      <NewPlantForm
        newPlantName={newPlantName}
        setNewPlantName={setNewPlantName}
        newPlantImage={newPlantImage}
        setNewPlantImage={setNewPlantImage}
        newPlantPrice={newPlantPrice}
        setNewPlantPrice={setNewPlantPrice}
        addNewPlant={addNewPlant}
      />
      <Search />
      <PlantList plantList={plantList} />
    </main>
  );
}

export default PlantPage;
