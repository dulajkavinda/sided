import React from "react";
import styles from "./controls.module.css";
import Arrow from "../arrows/arrow";
import { Rings } from "react-loader-spinner";
import {
  IoSettingsOutline,
  IoChevronBackSharp,
  IoChevronForwardSharp,
} from "react-icons/io5";

interface IControls {
  page: number;
  setPage: (page: number) => void;
  disableRight: boolean;
  setDisableRight: (disable: boolean) => void;
  setOpenSettings: (open: boolean) => void;
  isLoading: boolean;
}

const Controls = (props: IControls) => {
  const {
    page,
    setPage,
    disableRight,
    setDisableRight,
    isLoading,
    setOpenSettings,
  } = props;

  return (
    <div className={styles.keys}>
      <div className={styles.navs}>
        <Arrow
          disabled={page === 1}
          icon={<IoChevronBackSharp size={20} color="#7d8590" />}
          action={() => {
            if (page === 1) return;
            if (disableRight) {
              setDisableRight(false);
              setPage(page - 2);
            }
            setPage(page - 1);
          }}
        />
        <div className={styles.page_no}>
          <span>
            {isLoading ? (
              <Rings
                height="35"
                width="35"
                color="#7d8590"
                radius="3"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="rings-loading"
              />
            ) : (
              page
            )}
          </span>
        </div>
        <Arrow
          disabled={disableRight}
          icon={<IoChevronForwardSharp size={20} color="#7d8590" />}
          action={() => {
            if (disableRight) {
              return;
            }
            setPage(page + 1);
          }}
        />
      </div>
      <div className={styles.settings}>
        <Arrow
          fill="#161b22"
          disabled={false}
          icon={<IoSettingsOutline size={20} color="#7d8590" />}
          action={() => {
            setOpenSettings(true);
          }}
        />
      </div>
    </div>
  );
};

export default Controls;
