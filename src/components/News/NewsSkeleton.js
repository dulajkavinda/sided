import React from "react";
import styles from "./News.module.css";
import Link from "next/link";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
export default function NewsSkeleton({}) {
  return (
    <div className={styles.news}>
      <div className={styles.left_col}>
        <Skeleton
          height="100%"
          style={{
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
          }}
        />
      </div>

      <div className={styles.right_col}>
        <div className={styles.news_title}>
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </div>

        <div>
          <div className={styles.buttons}>
            <div>
              <Button colorScheme="teal" size="xs">
                Read More
              </Button>
            </div>
            <div>
              <Link href="/">
                <Button colorScheme="teal" size="xs" variant="outline">
                  Source
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.date}>
            {" "}
            <Skeleton height="16px" />
          </div>
        </div>
      </div>
    </div>
  );
}
