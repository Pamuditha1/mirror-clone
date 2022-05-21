import React from "react";
import ItemCard from "./ItemCard";

const items = [
  {
    id: 1,
    img: "https://www.mirror.co/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1VCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--aaa5f7688fef73a0458fe7fc42fcb49e55f9e9e3/Mirror_Bundle_Sh01_LS_560x620.jpg",
    title: "The Mirror",
    price: "1,495",
    priceText: "Or pay as low as $32/mo.",
    includes: [
      "The Mirror",
      "The Mirror Stand",
      "Mirror Lens Cap",
      "Standard Warranty",
    ],
  },
  {
    id: 2,
    img: "https://www.mirror.co/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc2dCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--09d74c39c4b112edbaaa28dd6feede059dfff42d/Mirror_Bundle_Sh02_LS_560x620.jpg",
    title: "MIRROR Essentials",
    price: "1,695",
    priceText: "Or pay as low as $36/mo.",
    includes: [
      "The Mirror",
      "The Mirror Stand",
      "Mirror Lens Cap",
      "MIRROR Heart Rate Monitor",
      "MIRROR Fitness Band Pack",
      "lululemon The Reversible Mat 5mm",
      "lululemon Loop It Up Mat Strap",
      "lululemon Lift & Lengthen Yoga Block",
      "lululemon Double Foam Roller Mini",
      "Standard Warranty",
    ],
  },
  {
    id: 3,
    img: "https://www.mirror.co/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBczRCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3dfecbbc78ab7359c052be5656af2775af62adda/Mirror_Bundle_Sh03_LS_560x620.jpg",
    title: "MIRROR Pro",
    price: "1,795",
    priceText: "Or pay as low as $38/mo.",
    includes: [
      "The Mirror",
      "The Mirror Stand",
      "Mirror Lens Cap",
      "MIRROR Heart Rate Monitor",
      "MIRROR Fitness Band Pack",
      "MIRROR Weights (1 Pair)",
      "lululemon The Reversible Mat 5mm",
      "lululemon Loop It Up Mat Strap",
      "lululemon Lift & Lengthen Yoga Block",
      "lululemon Workout Towel",
      "lululemon Double Foam Roller Mini",
      "Standard Warranty",
      " ",
      "Weights will ship Summer 2022",
    ],
  },
  {
    id: 4,
    img: "https://www.mirror.co/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc3NCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--774a85ccbd53f2f0c1c44c3b32acb54b23d3103f/Mirror_Bundle_Sh04_LS_560x620.jpg",
    title: "MIRROR Family",
    price: "2,045",
    priceText: "Or pay as low as $43/mo.",
    includes: [
      "The Mirror",
      "The Mirror Stand",
      "Mirror Lens Cap",
      "2 MIRROR Heart Rate Monitors",
      "2 MIRROR Fitness Band Packs",
      "2 Pairs of MIRROR Weights",
      "2 lululemon The Reversible Mats 5mm",
      "2 lululemon Loop It Up Mat Straps",
      "2 lululemon Lift & Lengthen Yoga Blocks",
      "2 lululemon Workout Towels",
      "1 lululemon Double Foam Roller Mini",
      "Standard Warranty",
      " ",
      "Weights will ship in Summer 2022",
    ],
  },
];

function ItemsCards() {
  return (
    <div className="row mt-5">
      {items.map(({ id, img, title, price, priceText, includes }) => (
        <div className="col-3  mr-2 ml-2">
          {" "}
          <ItemCard
            key={id}
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
