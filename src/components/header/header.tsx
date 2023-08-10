import React from "react";
import { GrGithub } from "react-icons/gr";
import styles from "./header.module.css";
import { openUrl } from "@/utils";

const GITHUB_REPO_URL = "https://github.com/dulajkavinda/sided";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <h1>
          <span
            className={styles.sided}
            style={{
              color: "#7d8590",
            }}
          >
            SIDED.
          </span>
          <span
            className={styles.news}
            style={{
              color: "#00a4a6",
            }}
          >
            NEWS
          </span>
        </h1>
        <h2
          style={{
            color: "#7d8590",
            fontWeight: 500,
            fontSize: "1.16rem",
          }}
        >
          news from every <span>angle</span>
        </h2>
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => openUrl(GITHUB_REPO_URL)}
        className={styles.other}
      >
        <GrGithub size={30} color="#7d8590" />
      </div>
    </div>
  );
};

export default Header;
