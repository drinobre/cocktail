// Source: https://react.semantic-ui.com/elements/button#variations-social
// CHECK COLOURS ARE NOT WORKING

import React from "react";
import { Button, Icon } from "semantic-ui-react";

const ButtonSocial = () => (
  <div>
    <Button color="facebook">
      <Icon name="facebook" /> Facebook
    </Button>
    <Button color="twitter">
      <Icon name="twitter" /> Twitter
    </Button>
    <Button color="google plus">
      <Icon name="google plus" /> Google Plus
    </Button>
    <Button color="linkedin">
      <Icon name="linkedin" /> LinkedIn
    </Button>
    <Button color="youtube">
      <Icon name="youtube" /> YouTube
    </Button>
  </div>
);

export default ButtonSocial;
