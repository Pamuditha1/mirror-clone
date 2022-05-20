import React, { useState, useEffect } from "react";
import videos from "../data/living-room-videos.json";
import "../styles/video-banner.css";

const buttons = [
  {
    id: 1,
    title: "Stand or wall mount",
    text: "Elevate your Mirror with our floor stand or mount it directly on the wall.",
  },
  {
    id: 2,
    title: "More room to move",
    text: "All you need is the space of a yoga mat to turn any room into a complete home gym.",
  },
  {
    id: 3,
    title: "Concealed outlet",
    text: "No more messy cords. The steel frame is built to be as artful as your home.",
  },
  {
    id: 4,
    title: "Advanced camera tech",
    text: "Get real-time feedback from our instructors and tech for perfect form each time.",
  },
];

function TButton({ id, title, text, clicked, setButtonClicked }) {
  return (
    <button onClick={() => setButtonClicked(id)} className="t-button mt-5 mb-5">
      <h3 className="b-h3">{title}</h3>
      <p className="b-p" style={{ height: clicked !== id && 0 }}>
        {text}
      </p>
    </button>
  );
}

function VideoBanner() {
  const [i, setI] = useState(0);
  const [video, setVideo] = useState(videos[0]);
  const [clicked, setClicked] = useState(null);

  const setButtonClicked = (id) => {
    setClicked(id);
  };

  useEffect(() => {
    setVideo(videos[i]);
  }, [i]);

  const onEnded = () => {
    setI((state) => state + 1);
  };
  return (
    <div>
      <video width="100%" autoPlay muted onEnded={onEnded}>
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay-div">
        <div className="container" style={{ height: "100%" }}>
          <div className="row p-5 content-dev">
            <div className="col-6">
              {buttons.map(({ id, title, text }) => (
                <TButton
                  id={id}
                  title={title}
                  text={text}
                  clicked={clicked}
                  setButtonClicked={setButtonClicked}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoBanner;
