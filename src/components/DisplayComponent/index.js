import React from "react";

// What I want to Display to users after the search?
// Add props to Display

export default function DisplayComponent({ title, image, alt, description }) {
  return (
    <div className="displayCard">
      <h2>{title}</h2>
      <img src={image} alt={alt} />
      <p>{description}</p>
    </div>
  );
}
