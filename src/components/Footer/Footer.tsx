import React from "react";
import { flaticonLink, url } from "../../constants/constants";
import Anchor from "../dumb components/Anchor";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="src">
        <b>Sources:</b>
        <Anchor href={flaticonLink} text={`Favicon by FreePik at ${flaticonLink}`} />
        <Anchor href={url} text={url} />
      </p>
      <p className="cr">Copyright 2024 ©</p>
    </footer>
  );
};

export default React.memo(Footer);
