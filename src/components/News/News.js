import React, { useState } from "react";
import styles from "./News.module.css";
import Link from "next/link";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { motion, AnimateSharedLayout } from "framer-motion";

import randomcolor from "randomcolor";

export const News = React.memo(({ title, date, image, link }) => {
  const [stateOpen, setOpen] = useState(false);

  function handleToggle() {
    setOpen(!stateOpen);
  }

  return (
    <AnimateSharedLayout type="crossfade">
      <motion.div
        layoutId="data"
        whileHover={{ scale: 1.1, opacity: 0.9 }}
        className={styles.news}
      >
        <div
          style={{
            color: "black",
            borderColor: `transparent ${randomcolor()} transparent transparent`,
          }}
          className={styles.news_corner}
        >
          <span>hiru</span>
        </div>
        <div className={styles.left_col}>
          <img src={image} />
        </div>
        <div className={styles.right_col}>
          <div className={styles.news_title}>
            <span className={styles.title_wrapper}>{title}</span>
          </div>

          <div>
            <div className={styles.buttons}>
              <div>
                <Button colorScheme="teal" size="xs" onClick={handleToggle}>
                  Read More
                </Button>
              </div>
              <div>
                <Link href={link}>
                  <Button colorScheme="teal" size="xs" variant="outline">
                    Source
                  </Button>
                </Link>
              </div>
            </div>
            <div className={styles.date}>{date}</div>
          </div>
        </div>
      </motion.div>
      {stateOpen && (
        <motion.div
          onClick={handleToggle}
          layoutId="data"
          className={styles.modal_window}
        >
          <span className={styles.body_text}>
            But a community is only as robust as the dedication of its members.
            Whether people will actually want to use a site that does away with
            so many of the familiar features of major social media networks
            remains to be seen.
          </span>
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
});

export default News;
