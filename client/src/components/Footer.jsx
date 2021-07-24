import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        <span>
          <FaFacebookF />
        </span>
        <span>
          <FaInstagram />
        </span>
        <span>
          <FaYoutube />
        </span>
      </p>
      <p>Help Centre | Terms and conditions | FAQ | Privacy Policy</p>
      <p>Lets Gtok Private Limited*</p>
    </div>
  );
}

export default Footer;
