import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import NewsModal from "../components/News/NewsModal";
import SkeletonGroup from "../components/News/SkeletonGroup";

import Slider from "../components/Slider/Slider";
import Pagination from "@material-ui/lab/Pagination";

import axios from "axios";
import LoadingIcon from "../components/LoadingIcon";
import Head from "next/head";
export default function Home() {
  const [news, setNews] = useState({ data: [] });
  const [initialLloading, setInitialLloading] = useState(true);

  useEffect(() => {
    axios("mirror/news", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: { pageno: 1 },
    })
      .then((response) => {
        setNews(response.data);
        setInitialLloading(false);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  const [sliderValue, setsliderValue] = useState(50);

  const [loading, setLoading] = useState(false);

  const getPage = (page_no) => {
    const hiru = `hiru/news`;
    const sirasa = `sirasa/news`;
    const sirasa_sub = `sirasa/sub_news`;
    const itn = `itn/news`;
    const mirror = `mirror/news`;
    const derana = `derana/news`;
    setLoading(true);
    if (sliderValue > 60 && sliderValue <= 80) {
      axios
        .all([
          axios(hiru, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            data: { pageno: page_no },
          }),
          axios(sirasa_sub, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            data: { pageno: page_no },
          }),
        ])
        .then(
          axios.spread((main, sub) => {
            setNews({ data: main.data.data });
            if (sub) {
              setNews({ data: main.data.data.concat(sub.data.data) });
            }
            setLoading(false);
          })
        );
    }
    if (sliderValue > 80 && sliderValue <= 100) {
      axios(derana, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        data: { pageno: page_no },
      })
        .then((response) => {
          setNews(response.data);
          setLoading(false);
        })
        .catch((error) => {
          throw error;
        });
    }

    if (sliderValue <= 60 && sliderValue > 40) {
      axios(mirror, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        data: { pageno: page_no },
      })
        .then((response) => {
          setNews(response.data);
          setLoading(false);
        })
        .catch((error) => {
          throw error;
        });
    }
    if (sliderValue > 20 && sliderValue <= 40) {
      axios(sirasa, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        data: { pageno: page_no },
      })
        .then((response) => {
          setNews(response.data);
          setLoading(false);
        })
        .catch((error) => {
          throw error;
        });
    }
    if (sliderValue >= 0 && sliderValue <= 20) {
      axios(itn, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        data: { pageno: page_no },
      })
        .then((response) => {
          setNews(response.data);
          setLoading(false);
        })
        .catch((error) => {
          throw error;
        });
    }
  };

  const getProvider = () => {
    if (sliderValue > 60 && sliderValue <= 80) {
      return "hiru";
    }
    if (sliderValue > 80 && sliderValue <= 100) {
      return "hiru";
    }

    if (sliderValue <= 60 && sliderValue > 40) {
      return "mirror";
    }

    if (sliderValue > 20 && sliderValue <= 40) {
      return "sirasa";
    }

    if (sliderValue >= 0 && sliderValue <= 20) {
      return "itn";
    }
  };
  {
    if (initialLloading)
      return (
        <div className={styles.container}>
          <Head>
            <meta name="title" content="sided.news" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>sided.news</title>
          </Head>
          <div>
            <LoadingIcon />
          </div>
        </div>
      );
    return (
      <div className={styles.container}>
        <Head>
          <meta name="title" content="sided.news" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>sided.news</title>
        </Head>
        <Slider
          getPage={getPage}
          sliderValue={sliderValue}
          setsliderValue={setsliderValue}
        />
        <Pagination
          onChange={(event, number) => {
            getPage(number);
          }}
          count={sliderValue >= 0 && sliderValue < 20 ? 1 : 10}
          color="primary"
        />
        {loading ? (
          <SkeletonGroup />
        ) : (
          <div className={styles.news_container}>
            {news
              ? news.data.map((news) => {
                  return (
                    <NewsModal
                      provider={getProvider()}
                      key={news.link}
                      title={news.name}
                      date={news.date}
                      image={news.image}
                      link={news.link}
                      content={news.content ? news.content : ""}
                    />
                  );
                })
              : null}
          </div>
        )}
      </div>
    );
  }
}

// export async function getServerSideProps(context) {
//   const res = await fetch(`mirror/news`, {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify({ pageno: 1 }),
//   });
//   const data = await res.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { data },
//   };
// }
