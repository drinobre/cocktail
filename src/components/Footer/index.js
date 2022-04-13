import React from "react";
import ButtonSocial from "../ButtonSocial";

export default function Footer({ copyright }) {
  return (
    <div>
      <div>{copyright}</div>
      <div>
        <ButtonSocial />
      </div>
    </div>
  );
}
