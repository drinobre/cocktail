// PRACTING THE USE OF CardExampleCard - NOT WORKING

import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

// ORGIGINAL WITHOUT AMENDS
export default function CardExampleCard() {
  <Card>
    <Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </Card.Content>
  </Card>;
}

// AMENDS USING THE ACTUAL DATA

// export default function CardElement({ title, image, description }) {
//   <Card>
//     {/* <Image src={image1} wrapped ui={false} /> */}
//     <Card.Content>
//       {/* <Card.Header>{title1}</Card.Header> */}
//       {/* <Card.Meta>
//         <span className="date">{isAlcholic}</span>
//       </Card.Meta> */}
//       <Card.Description>Hi</Card.Description>
//     </Card.Content>
//     {/* <Card.Content extra>
//       <a>
//         <Icon name='user' />
//         22 Friends
//       </a>
//     </Card.Content> */}
//   </Card>;
// }
