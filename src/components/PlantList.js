import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantList, removePlant }) {
  const plantsToDisplay = plantList.map((plant) => (
    <PlantCard
      plantID={plant.id}
      plantName={plant.name}
      plantImage={plant.image}
      plantPrice={plant.price}
      key={plant.id}
      removePlant={removePlant}
    />
  ));
  return <ul className="cards">{plantsToDisplay}</ul>;
}

export default PlantList;
