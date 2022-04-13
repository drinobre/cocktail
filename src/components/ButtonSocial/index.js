// Source: https://react.semantic-ui.com/elements/button#variations-social

import React from "react";
import { Button, Icon } from "semantic-ui-react";

const ButtonSocial = ({ link }) => (
  <div className="mobile-hidden">
    <Button
      href="https://nobre-lawrence.vercel.app/"
      target="_blank"
      color="purple"
    >
      Portfolio
    </Button>
    <Button
      href="https://www.linkedin.com/in/adriana-nobre-lawrence/"
      target="_blank"
      color="linkedin"
    >
      <Icon name="linkedin" /> Linkedin
    </Button>
    <Button href="https://github.com/drinobre" target="_blank" color="github">
      <Icon name="github" /> Github
    </Button>
  </div>
);

export default ButtonSocial;
