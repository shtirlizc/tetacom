import Swiper from "swiper";

export const Slider = {
  init() {
    new Swiper(".js-swiper-main", {
      loop: true,
    });
  },
};
