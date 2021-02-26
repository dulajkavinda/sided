import React from "react";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.footer_copy}>
        Copyright © 2021{" "}
        <a href="https://sided.news/" style={{ color: "#5D5D5D" }}>
          sided.news
        </a>
        , Inc. All rights reserved
      </div>
      <div className={styles.dev_by}>
        Developed by{" "}
        <a href="https://boxlov.tech/">
          <span
            style={{
              color: "#00a4a9",
              opacity: 1,
              fontSize: "1.1em",
              fontWeight: "700",
            }}
          >
            Boxlov
          </span>
        </a>
      </div>
    </div>
  );
}
