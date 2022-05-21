import React from "react";
import ItemsCards from "./ItemsCards";

function ShoppingItems() {
  return (
    <div className="container services-content">
      <div className="row text-center mt-5 mb-5">
        <h1>Bundle up & save</h1>
        <ItemsCards />
      </div>
    </div>
  );
}

export default ShoppingItems;
