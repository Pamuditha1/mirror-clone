import React from "react";
import Button from "./common/Button";
import "../styles/items.css";

function ItemCard({ img, title, price, priceText, includes }) {
  return (
    <div className="item-card-con">
      <div className="row item-card-row">
        <img src={img} alt="item" className="item-card-img" />
      </div>
      <div className="row item-card-row pt-4 pb-2 border-bottom">
        <h5>{title}</h5>
      </div>
      <div className="row item-card-row text-center pt-4 pb-4 border-bottom">
        <div className="">
          <Button
            filled
            text="Shop Package"
            href="https://www.mirror.co/shop/mirror-basic"
          />
        </div>
      </div>
      <div className="row item-card-row pt-4 pb-4 border-bottom">
        <h3>$ {price}</h3>
        <small>
          {priceText} <span className="learn-txt">Learn more</span>
        </small>
      </div>
      <div className="row item-card-row includes-r text-center pt-4 pb-5">
        <h6 className="mb-3">Includes</h6>
        {includes.map((i) => (
          <small className="small-txt">{i}</small>
        ))}
      </div>
    </div>
  );
}

export default ItemCard;
