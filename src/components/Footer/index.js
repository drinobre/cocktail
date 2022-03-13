import React from "react";
import ButtonSocial from "../ButtonSocial";

export default function Footer({ copyright }) {
  return (
    <footer class="footer">
      <div>{copyright}</div>
      <div>
        <ButtonSocial />
      </div>
    </footer>
  );
}
