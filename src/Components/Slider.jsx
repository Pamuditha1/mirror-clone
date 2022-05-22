import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import InstructorCard from "./cards/InstructorCard";
import { LeftArrow, RightArrow } from "./SliderArrows";
import "../styles/sider.css";

import instructors from "../data/instructors.json";

function Slider() {
  return (
    <div className=" mt-5 mb-5">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {instructors.map(({ name, image, description }, index) => (
          <InstructorCard
            key={index}
            name={name}
            image={image}
            description={description}
          />
        ))}
      </ScrollMenu>
    </div>
  );
}

export default Slider;
