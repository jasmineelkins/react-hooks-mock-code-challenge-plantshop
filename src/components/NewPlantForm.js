import React from "react";

function NewPlantForm({
  newPlantName,
  setNewPlantName,
  newPlantImage,
  setNewPlantImage,
  newPlantPrice,
  setNewPlantPrice,
  addNewPlant,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    console.log(newPlantName, newPlantImage, newPlantPrice);
    addNewPlant(newPlantName, newPlantImage, newPlantPrice);
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          onChange={(e) => setNewPlantName(e.target.value)}
          value={newPlantName}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={(e) => setNewPlantImage(e.target.value)}
          value={newPlantImage}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          onChange={(e) => setNewPlantPrice(e.target.value)}
          value={newPlantPrice}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Add Plant
        </button>
      </form>
    </div>
  );
}

export default NewPlantForm;
