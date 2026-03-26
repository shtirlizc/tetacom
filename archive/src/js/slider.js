import Swiper, { Autoplay } from "swiper";

export const Slider = {
  buttons: document.querySelectorAll("._block-head__pagination-item button"),

  init() {
    this.slider = new Swiper(".js-swiper-main", {
      modules: [Autoplay],
      speed: 500,
      autoHeight: true,
      autoplay: {
        delay: 7000,
      },
      breakpoints: {
        1081: {
          speed: 1000,
          autoHeight: false,
        },
      },
    });

    this.buttons.forEach((btn) => {
      btn.addEventListener("click", this.pagination.bind(this));
    });

    this.slider.on("slideChangeTransitionStart", () => {
      this.paginationClasses(this.slider.activeIndex);
    });
  },

  pagination(evt) {
    const targetSlideNumber = Number(evt.currentTarget.dataset.slide);
    this.slider.slideTo(targetSlideNumber);
    this.paginationClasses(targetSlideNumber);
  },

  paginationClasses(idx) {
    this.buttons.forEach((btn) => {
      if (Number(btn.dataset.slide) === idx) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  },
};
