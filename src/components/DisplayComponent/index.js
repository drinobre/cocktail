import React from "react";

export default function DisplayComponent({ title, image, alt, description }) {
  return (
    <div class="displayCard">
      <h2>{title}</h2>
      <img src={image} alt={alt} />
      <p>{description}</p>
    </div>
  );
}
