"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface WorkSliderBtnsProps {
  containerStyles?: string;
  btnStyles?: string;
  iconsStyles?: string;
}

export function WorkSliderBtns({
  containerStyles,
  btnStyles,
  iconsStyles,
}: WorkSliderBtnsProps) {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold
          className={iconsStyles}
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
}
