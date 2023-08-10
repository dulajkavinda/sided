import React, { useState, useEffect, useCallback } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { getChannelName, dateConverter, trimTitle } from "@/utils";
import styles from "./post-card.module.css";

interface IPostCardProps {
  title: string;
  image: string;
  channel: string;
  date: string;
  link: string;
  postId: number;
  likes?: number;
}

const PostCard = (props: IPostCardProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [bgImage, setBgImage] = useState<string>("");

  const { title, image, channel, date, link, postId, likes } = props;

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setLoaded(true);
      setBgImage(img.src);
    };
  }, [image]);

  return (
    <a
      className={styles.post_card}
      href={link}
      target="_blank"
      aria-label="News Article"
      tabIndex={1}
    >
      <article
        className={loaded ? styles.main : styles.skeleton}
        style={{
          backgroundImage: loaded
            ? `linear-gradient(to left, rgba(22, 27, 34, 0.86), rgba(22, 27, 34, 1)), url('${bgImage}')`
            : "",
        }}
      >
        <div className={styles.header}>
          <h1>{trimTitle(title)}</h1>
        </div>
        <div className={styles.body}>
          <p></p>
        </div>
        <div className={styles.footer}>
          <div className={styles.footer_main}>
            <div className={styles.channel}>
              <BsFillSunFill size={18} />
              <span>{getChannelName(channel)}</span>
            </div>
            {likes && (
              <div className={styles.likes}>
                <AiFillStar size={18} />
                <span>{likes}</span>
              </div>
            )}
            <div className={styles.date}>
              <BiTimeFive size={18} />
              <span>{dateConverter(date)}</span>
            </div>
          </div>

          <div className={styles.post_id}>
            <span>#{postId}</span>
          </div>
        </div>
      </article>
    </a>
  );
};

PostCard.defaultProps = {
  likes: undefined,
};

export default PostCard;
