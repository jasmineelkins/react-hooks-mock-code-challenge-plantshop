import React, { useState } from "react";

function PlantCard({
  plantID,
  plantName,
  plantImage,
  plantPrice,
  removePlant,
}) {
  const [inStockStatus, setInStockStatus] = useState(true);

  return (
    <li className="card">
      <img src={plantImage} alt={plantName} />
      <h4>{plantName}</h4>
      <p>Price: {plantPrice}</p>

      {inStockStatus ? (
        <button
          className="primary"
          onClick={() => setInStockStatus(!inStockStatus)}
        >
          In Stock
        </button>
      ) : (
        <button onClick={() => setInStockStatus(!inStockStatus)}>
          Out of Stock
        </button>
      )}

      <button className="remove" onClick={() => removePlant(plantID)}>
        Remove
      </button>
    </li>
  );
}

export default PlantCard;
