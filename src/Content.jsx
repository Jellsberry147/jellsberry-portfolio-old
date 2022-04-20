import React from "react";
import BeachL from "./beachL.jpg";
import BeachML from "./beachML.jpg";
import BeachMR from "./beachMR.jpg";
import BeachR from "./beachR.jpg";

export function Content() {
  return (
    <div className="content">
      <div>
        <h1>
          I decided to replicate the basic style of the Comcast Business website
          in order to demonstrate that I'll be comfortable developing for your
          company, while still using all of my own assets to show off my unique
          personality.
        </h1>
        <div className="beachIMG">
          <div className="beachIMGL">
            <img src={BeachL} alt="Beach" className="beachImg" />
          </div>

          <div className="beachIMGML">
            <img src={BeachML} alt="Beach" className="beachImg" />
          </div>

          <div className="beachIMGMR">
            <img src={BeachMR} alt="Beach" className="beachImg" />
          </div>

          <div className="beachIMGR">
            <img src={BeachR} alt="Beach" className="beachImg" />
          </div>
        </div>
      </div>
      <div className="details">
        <h5>
          Having studied under Michael extensively and as a graduate of several
          web development courses focusing on JS and many fundamentals, I will
          be a valuable addition to your team!{" "}
        </h5>
        <h5>
          I anticipate graduating with my Bachelor's degree in programming in
          October 2022, and am ready to get started on my career!
        </h5>
      </div>
    </div>
  );
}
