import React from "react";
import ButtonSocial from "../ButtonSocial";

export default function Footer({ copyright }) {
  return (
    <footer>
      {copyright}
      <ButtonSocial />
    </footer>
  );
}
