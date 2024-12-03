import { url } from "../../constants/constants";
import Anchor from "./Anchor";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="src">
        <b>Sources:</b>
        <Anchor href={url} text={url} />
      </p>
      <p className="cr">Copyright 2024 ©</p>
    </footer>
  );
};

export default Footer;
