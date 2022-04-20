import React from "react";

export function Description() {
  return (
    <div className="description">
      <h3>LIMITED-TIME OFFER</h3>
      <hr className="desciptionHr" />
      <p>
        <span className="descriptionIntro">
          <i> Fast Learner, Strong Developer</i>
        </span>
      </p>
      <p>
        <span className="descriptionWow">
          <b>Now available for hiring! Wow!</b>
        </span>
      </p>
      <ul>
        <li>
          Comfortable with HTML, CSS, and several JS Libraries
          <em> including React!</em>
        </li>
        <li>Looking for a company in which to grow, learn, and amaze!</li>
        <li>Endorsed by Wonder-Dev!</li>
      </ul>
      <div>
        <button className="detailsButton">VIEW DETAILS</button>
        <button className="projectsButton">PROJECTS!</button>
      </div>
    </div>
  );
}
