import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import styles from "./post-card-skeleton.module.css";

interface IPostCardSkeletonProps {}

const PostCardSkeleton = (props: IPostCardSkeletonProps) => {
  return (
    <a
      className={styles.post_card}
      href="#"
      target="_blank"
      aria-label="News Article"
      tabIndex={1}
    >
      <article className={styles.skeleton}>
        <div className={styles.header}>
          <h1></h1>
          <h1></h1>
        </div>
        <div className={styles.body}>
          <p></p>
        </div>
        <div className={styles.footer}>
          <div className={styles.footer_main}>
            <div className={styles.channel}>
              <BsFillSunFill size={18} />
              <span></span>
            </div>
            <div className={styles.date}>
              <BiTimeFive size={18} />
              <span></span>
            </div>
          </div>

          <div className={styles.post_id}>
            <span>#</span>
          </div>
        </div>
      </article>
    </a>
  );
};

PostCardSkeleton.defaultProps = {
  likes: undefined,
};

export default PostCardSkeleton;
