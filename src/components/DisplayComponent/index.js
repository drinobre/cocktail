import React from "react";
import { Card, Button } from "semantic-ui-react";
import ModalComponent from "../ModalElement";

// const extra = (
//   // <ModalComponent class="direction-center">Read more</ModalComponent>
// );

const CardExampleCardProps = ({
  title,
  image,
  alcoholic,
  alt,
  description,
}) => (
  <>
    <Card
      header={title}
      image={image}
      //icon="cocktail"
      meta={alcoholic}
      description={description}
      // extra={extra}
    />
  </>
);

export default CardExampleCardProps;

// export default function DisplayComponent({ title, image, alt, description }) {
//   return (
//     <>
//       <h2>{title}</h2>
//       <img class="img_size_medium" src={image} alt={alt} />
//       <p>{description}</p>
//       <span>
//         <button>Read more</button>
//       </span>
//     </>
//   );
// }
