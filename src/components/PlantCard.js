import React, { useState } from "react";

function PlantCard({ plantID, plantName, plantImage, plantPrice }) {
  // set state for in-stock button
  // const [stockStatus, setStockStatus] = useState(true);

  return (
    <li className="card">
      <img src={plantImage} alt={plantName} />
      <h4>{plantName}</h4>
      <p>Price: {plantPrice}</p>

      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
