// Source: https://react.semantic-ui.com/elements/button#variations-social

import React from "react";
import { Button, Icon } from "semantic-ui-react";

const ButtonSocial = () => (
  <div className="mobile-hidden">
    <Button color="purple">Portfolio</Button>
    <Button color="linkedin">
      <Icon name="linkedin" /> Linkedin
    </Button>
    <Button color="github">
      <Icon name="github" /> Github
    </Button>
  </div>
);

export default ButtonSocial;
