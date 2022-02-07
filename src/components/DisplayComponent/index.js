import React from "react";

// What I want to Display to users after the search?
// Add props to Display

export default function DisplayComponent({ title, image, alt, description }) {
  return (
    <div className="displayCard">
      <div className="displayCard-title">
        <h2>{title}</h2>
      </div>
      <div>
        <img class="img_size_medium" src={image} alt={alt} />
      </div>

      <p>{description}</p>
    </div>
  );
}
