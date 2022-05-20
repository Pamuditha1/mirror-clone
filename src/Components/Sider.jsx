import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import instructors from "../data/instructors.json";
import InstructorCard from "./InstructorCard";
import "../styles/sider.css";
import { LeftArrow, RightArrow } from "./Arrows";

function Sider() {
  return (
    <div className=" mt-5 mb-5">
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        // LeftArrow={
        //   <button
        //     disabled={isFirstItemVisible}
        //     onClick={() => scrollPrev()}
        //     className="arrow"
        //   >
        //     {"<"}
        //   </button>
        // }
        // RightArrow={
        //   <button
        //     disabled={isLastItemVisible}
        //     onClick={() => scrollNext()}
        //     className="arrow"
        //   >
        //     {">"}
        //   </button>
        // }
      >
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

export default Sider;
