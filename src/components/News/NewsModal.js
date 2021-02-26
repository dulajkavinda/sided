import React, { useState, useEffect } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import Link from "next/link";
import News from "./News";
import styles from "./News.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
export default function NewsModal({
  title,
  date,
  image,
  link,
  provider,
  content,
}) {
  const [stateOpen, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  useEffect(() => {}, []);

  const getDescription = async () => {
    await axios(`/${provider}/get_description`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: { link: link },
    })
      .then((response) => {
        setDescription(response.data);
      })
      .catch((error) => {
        throw error;
      });
  };

  function handleToggle() {
    setOpen(!stateOpen);
    if (!stateOpen) {
      getDescription();
    }
  }

  return (
    <AnimateSharedLayout type="crossfade">
      {stateOpen ? (
        <div className="modal-overlay" onClick={handleToggle}>
          <motion.div
            layoutId="data"
            className="modal"
            style={{ borderRadius: "20px" }}
          >
            <motion.div
              className={styles.modal_content}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.2,
              }}
            >
              <div className={styles.heading}>
                <span>{title}</span>
              </div>
              <div>
                <img className={styles.modal_image} src={image}></img>
              </div>
              {description.data || content !== "" ? (
                <div className={styles.news_body}>
                  {content !== ""
                    ? content
                    : description.data
                    ? description.data
                    : null}
                  {/*  */}
                </div>
              ) : (
                <div className={styles.news_body_loading}>
                  <CircularProgress />
                </div>
              )}
            </motion.div>
            <Link href={link}>
              <Button colorScheme="teal" size="xs" variant="outline">
                Source
              </Button>
            </Link>
          </motion.div>
        </div>
      ) : (
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          layoutId="data"
          onClick={handleToggle}
        >
          <News
            key={link}
            title={title}
            date={date}
            image={image}
            link={link}
          />
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
}
