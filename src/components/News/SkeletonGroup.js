import React from "react";
import styles from "./News.module.css";
import NewsSkeleton from "./NewsSkeleton";
export default function SkeletonGroup() {
  return (
    <div className={styles.news_container}>
      <NewsSkeleton></NewsSkeleton>
      <NewsSkeleton></NewsSkeleton>
      <NewsSkeleton></NewsSkeleton>
      <NewsSkeleton></NewsSkeleton>
      <NewsSkeleton></NewsSkeleton>
      <NewsSkeleton></NewsSkeleton>
      <NewsSkeleton></NewsSkeleton>
      <NewsSkeleton></NewsSkeleton>
      <NewsSkeleton></NewsSkeleton>
      <NewsSkeleton></NewsSkeleton>
      <NewsSkeleton></NewsSkeleton>
      <NewsSkeleton></NewsSkeleton>
      <NewsSkeleton></NewsSkeleton>
      <NewsSkeleton></NewsSkeleton>
      <NewsSkeleton></NewsSkeleton>
    </div>
  );
}
