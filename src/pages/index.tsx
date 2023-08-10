import { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "@/components/footer";
import Settings from "@/components/settings";
import PostCard, { PostCardSkeleton } from "@/components/post-card";
import getPosts from "@/services/get-posts";
import useKeyPress from "@/hooks/useKeyPress";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";
import { INITIAL_CHANNEL } from "@/utils";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Post } from "@/types";

const Selector = dynamic(() => import("@/components/selector"), {
  ssr: false,
});

const Controls = dynamic(() => import("@/components/controls/controls"), {
  ssr: false,
});

const Header = dynamic(() => import("@/components/header"), {
  ssr: false,
});

export const LOCAL_STORAGE_KEY_PPP = "per-posts-page";
export const LOCAL_STORAGE_KEY_CHANNEL = "selected-channel";

const INT_POSTS_PER_PAGE = 10;
const KEYBOARD_SHORTCUTS = {
  NEXT_PAGE: "ArrowRight",
  PREV_PAGE: "ArrowLeft",
  OPEN_SETTINGS: "/",
};

const Home = () => {
  const [data, setData] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [random, setRandom] = useState(0);
  const [disableRight, setDisableRight] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [openSettings, setOpenSettings] = useState(false);

  const [storedPPosts, _] = useLocalStorage<number>(LOCAL_STORAGE_KEY_PPP);
  const [storedChannel, __] = useLocalStorage<string>(
    LOCAL_STORAGE_KEY_CHANNEL
  );

  const [perPagePosts, setPerPagePosts] = useState(
    storedPPosts || INT_POSTS_PER_PAGE
  );
  const [channel, setChannel] = useState(storedChannel || INITIAL_CHANNEL);

  const arrowRightPressed = useKeyPress(KEYBOARD_SHORTCUTS.NEXT_PAGE);
  const arrowLeftPressed = useKeyPress(KEYBOARD_SHORTCUTS.PREV_PAGE);
  const forwardSlashPressed = useKeyPress(KEYBOARD_SHORTCUTS.OPEN_SETTINGS);

  useEffect(() => {
    if (arrowRightPressed) {
      if (disableRight) {
        return;
      }
      setPage(page + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrowRightPressed]);

  useEffect(() => {
    if (arrowLeftPressed) {
      if (page === 1) return;
      if (disableRight) {
        setDisableRight(false);
        setPage(page - 2);
      }
      setPage(page - 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrowLeftPressed]);

  useEffect(() => {
    if (forwardSlashPressed) {
      setOpenSettings(!openSettings);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forwardSlashPressed]);

  useEffect(() => {
    setIsLoading(true);
    const fetchPosts = async () => {
      const posts = await getPosts({
        pageNo: page,
        pageSize: perPagePosts,
        channel,
        random: random,
      });

      setIsLoading(false);
      setInitialLoad(false);

      if (posts.data?.posts.length === 0) {
        setDisableRight(true);
        return;
      }

      if (posts.error || !posts.data) {
        return;
      }

      if (posts.data.posts.length > 0) {
        setData(posts.data.posts);
      }

      if (random) {
        setRandom(0);
      }
    };

    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel, page, perPagePosts]);

  return (
    <>
      <Head>
        <title>Sided</title>
        <meta name="description" content="Sided" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <Header />
        </header>

        {openSettings && (
          <Settings
            setOpenSettings={setOpenSettings}
            setPerPagePosts={setPerPagePosts}
            perPagePosts={perPagePosts}
          />
        )}

        <section className={styles.tools}>
          <div className={styles.select}>
            <Selector
              channel={channel}
              setPage={setPage}
              setChannel={setChannel}
            />
          </div>
          <Controls
            setDisableRight={setDisableRight}
            disableRight={disableRight}
            setOpenSettings={setOpenSettings}
            isLoading={isLoading}
            page={page}
            setPage={setPage}
          />
        </section>
        <section className={`${styles.articles}`}>
          {data.length > 0 && !initialLoad
            ? data.map((post: Post) => (
                <PostCard
                  key={post.postId}
                  postId={post.postId}
                  title={post.title.replace(/[^\w\s]/gi, "")}
                  image={post.image}
                  channel={post.channel}
                  link={post.link}
                  date={post.date.toString()}
                />
              ))
            : Array(10)
                .fill(2)
                .map((_, i) => <PostCardSkeleton key={i} />)}
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Home;
