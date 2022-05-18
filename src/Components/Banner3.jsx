import React from "react";
import Button from "./Button";

function Banner3() {
  return (
    <div className="container con">
      <div className="row">
        <div className="col-7">
          <h2 className="text text-left">
            Taught by the best instructors in the world.
          </h2>
        </div>
      </div>
      <div className="row mt-3">
        <div className="text-left">
          <Button
            text="Meet our instructors"
            href="https://www.mirror.co/instructors"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner3;
