import React, { useState } from "react";
import styles from "./Slider.module.css";
import Slider from "@material-ui/core/Slider";
import SpaIcon from "@material-ui/icons/Spa";
import CallEndIcon from "@material-ui/icons/CallEnd";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import RingVolumeIcon from "@material-ui/icons/RingVolume";
import PhoneIcon from "@material-ui/icons/Phone";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import { useWindowSize } from "../Hooks/useWindowSize";

import { motion } from "framer-motion";

const iconVariants = {
  active: {
    scale: 1.4,
    transition: { duration: 1 },
  },
  inactive: {
    scale: 1,
    transition: { duration: 1 },
  },
};

export default function SliderBar({ setsliderValue, sliderValue, getPage }) {
  const size = useWindowSize().width;

  let marks = [
    {
      value: 0,
      label: size < 600 ? "EL" : "extreme left",
    },
    {
      value: 25,
      label: size < 600 ? "L" : "left",
    },
    {
      value: 50,
      label: size < 600 ? "M" : "middle",
    },
    {
      value: 75,
      label: size < 600 ? "R" : "right",
    },
    {
      value: 100,
      label: size < 600 ? "ER" : "extreme right",
    },
  ];
  return (
    <div className={styles.slider}>
      <div>
        <div className={styles.bias_label}>
          choose a political bias for your news
        </div>
      </div>
      <div className={styles.slider_icons}>
        <motion.div
          variants={iconVariants}
          animate={
            sliderValue >= 0 && sliderValue <= 20 ? "active" : "inactive"
          }
        >
          <SpaIcon
            style={{
              width: "30px",
              height: "30px",
              transition: "color 0.5s ease",
              color: sliderValue >= 0 && sliderValue <= 20 ? "#E66645" : "gray",
            }}
          />
        </motion.div>
        <motion.div
          variants={iconVariants}
          animate={
            sliderValue > 20 && sliderValue <= 40 ? "active" : "inactive"
          }
        >
          <FilterVintageIcon
            style={{
              width: "30px",
              height: "30px",
              transition: "color 0.5s ease",
              color: sliderValue > 20 && sliderValue <= 40 ? "#E66645" : "gray",
            }}
          />
        </motion.div>
        <motion.div
          variants={iconVariants}
          animate={
            sliderValue > 40 && sliderValue <= 60 ? "active" : "inactive"
          }
        >
          <AccessibilityIcon
            style={{
              width: "30px",
              height: "30px",
              transition: "color 0.5s ease",
              color: sliderValue > 40 && sliderValue <= 60 ? "#E66645" : "gray",
            }}
          />
        </motion.div>

        <motion.div>
          <motion.div
            variants={iconVariants}
            animate={
              sliderValue > 60 && sliderValue <= 80 ? "active" : "inactive"
            }
          >
            <PhoneIcon
              style={{
                width: "30px",
                height: "30px",
                transition: "color 0.5s ease",
                color:
                  sliderValue > 60 && sliderValue <= 80 ? "#E66645" : "gray",
              }}
            />
          </motion.div>
        </motion.div>
        <motion.div>
          <motion.div
            variants={iconVariants}
            animate={
              sliderValue > 80 && sliderValue <= 100 ? "active" : "inactive"
            }
          >
            <RingVolumeIcon
              style={{
                width: "30px",
                height: "30px",
                transition: "color 0.5s ease",
                color:
                  sliderValue > 80 && sliderValue <= 100 ? "#E66645" : "gray",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      <Slider
        onChangeCommitted={(event, newValue) => {
          getPage(1);
        }}
        style={{ width: size < 600 ? "90%" : "70%" }}
        marks={marks}
        value={sliderValue}
        onChange={(event, newValue) => {
          setsliderValue(newValue);
        }}
        aria-labelledby="continuous-slider"
      />
    </div>
  );
}
