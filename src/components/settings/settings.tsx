import React, { useState } from "react";
import styles from "./settings.module.css";
import useLocalStorage from "@/hooks/useLocalStorage";

interface ISettings {
  setPerPagePosts: (posts: number) => void;
  setOpenSettings: (open: boolean) => void;
  perPagePosts: number;
}

interface IPostsPerPageOptions {
  perPosts: number;
  setPerPosts: (posts: number) => void;
  perPagePosts: number;
}

const POSTS_PER_PAGE = [10, 20, 30];
const LOCAL_STORAGE_KEY = "per-posts-page";

const PostsPerPageOptions = (props: IPostsPerPageOptions) => {
  const { perPosts, setPerPosts, perPagePosts } = props;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setPerPosts(perPosts)}
      className={
        perPagePosts === perPosts
          ? `${styles.selected}`
          : `${styles.option} ${styles.press}`
      }
    >
      {perPosts}
    </div>
  );
};

const SettignsModal = ({
  setPerPagePosts,
  setOpenSettings,
  perPagePosts,
}: ISettings) => {
  const [storedPPosts, setStoredPPosts] = useLocalStorage<number>(
    LOCAL_STORAGE_KEY,
    perPagePosts
  );

  const [perPosts, setPerPosts] = useState(storedPPosts || perPagePosts);

  return (
    <div onClick={() => setOpenSettings(false)} className={styles.overlay}>
      <div onClick={(e) => e.stopPropagation()} className={styles.content}>
        <div className={styles.header}>
          <h3>Settings</h3>
        </div>
        <div className={styles.section}>
          <span>Posts Per Page</span>
          <div className={styles.options}>
            {POSTS_PER_PAGE.map((postCount) => (
              <PostsPerPageOptions
                key={postCount}
                perPosts={postCount}
                perPagePosts={perPosts}
                setPerPosts={setPerPosts}
              />
            ))}
          </div>
        </div>
        <div className={`${styles.section} ${styles.not_finished}`}>
          <span>Enable Media (soon)</span>
          <div className={styles.options}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => {}}
              className={`${styles.option} ${styles.press} ${styles.not_finished}`}
            >
              On
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={() => {}}
              className={`${styles.option} ${styles.press} ${styles.not_finished}`}
            >
              Off
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <button
            onClick={() => {
              setPerPagePosts(perPosts);
              setStoredPPosts(perPosts);
              setOpenSettings(false);
            }}
            className={`${styles.save} ${styles.press}`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettignsModal;
