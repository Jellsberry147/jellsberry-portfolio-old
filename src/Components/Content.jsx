import React from "react";
import { BannerImage } from "./BannerImage";
import { Description } from "./Description";

export function Content() {
  return (
    <div className="content">
      <BannerImage />
      <div className="descriptionWrapper">
        <Description />
      </div>
      <div>
        <div className="explanationText">
          <h1>
            I decided to replicate the basic style of the Comcast Business
            website in order to demonstrate that I'll be comfortable developing
            for your company, while still using all of my own assets to show off
            my unique personality.
          </h1>
        </div>
        <div className="flex-container">
          <div>
            <div className="beachIMGL contentIMG">
              <p>Here's some content.</p>
            </div>

            <div className="beachIMGML contentIMG">
              <p>Wowza, more content!</p>
            </div>

            <div className="beachIMGMR contentIMG">
              <p>More? I must be a madman!</p>
            </div>

            <div className="beachIMGR contentIMG">
              <p>Finally! That has to be all of it!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="details">
        <h5>
          Having studied under Michael extensively and through my exploration of
          several web development courses focusing on JS and many fundamentals,
          I will be a valuable addition to your team!
        </h5>
        <h5>
          I anticipate graduating with my Bachelor's degree in programming in
          October 2022, and am ready to get started on my career!
        </h5>
      </div>
    </div>
  );
}
