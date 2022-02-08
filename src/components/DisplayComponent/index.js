import React from "react";

// What I want to Display to users after the search?
// Add props to Display

export default function DisplayComponent({ title, image, alt, description }) {
  return (
    <>
      <h2>{title}</h2>
      <img class="img_size_medium" src={image} alt={alt} />
      <p>{description}</p>
      <span>
        <button>Read more</button>
      </span>
    </>
  );
}
