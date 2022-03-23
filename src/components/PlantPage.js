import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plantList }) {
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plantList={plantList} />
    </main>
  );
}

export default PlantPage;
