import React from "react";
import ItemCard from "./cards/ItemCard";

import items from "../data/items.json";

function ItemsCards() {
  return (
    <div className="row mt-5">
      {items.map(({ id, img, title, price, priceText, includes }) => (
        <div key={id} className="col-3  mr-2 ml-2">
          <ItemCard
            img={img}
            title={title}
            price={price}
            priceText={priceText}
            includes={includes}
          />
        </div>
      ))}
    </div>
  );
}

export default ItemsCards;
