import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <FontAwesomeIcon
        className="swiper-nav-btnLeft"
        icon={faCircleChevronLeft}
        onClick={() => swiper.slidePrev()}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className="swiper-nav-btnRight"
        icon={faCircleChevronRight}
        onClick={() => swiper.slideNext()}
      >
        Next
      </FontAwesomeIcon>
    </div>
  );
};
