import React from "react";
import Beach from "./beach.jpg";

export function Content() {
  return (
    <div className="content">
      <h1>
        I decided to replicate the basic style of the Comcast Business website
        in order to demonstrate that I'll be comfortable developing for your
        company, while still using all of my own assets to show off my unique
        personality.
      </h1>
      <img src={Beach} alt="Beach" className="beachImg" />
    </div>
  );
}
