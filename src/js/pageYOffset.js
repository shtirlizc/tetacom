export const PageYOffset = {
  value: window.pageYOffset,
  header: document.querySelector("._header"),

  init() {
    if (this.header) {
      if (this.value) {
        this.add();
      }

      document.addEventListener("scroll", () => {
        if (window.pageYOffset) {
          this.add();
        } else {
          if (sessionStorage.getItem("side_menu") !== "true") {
            this.remove();
          }
        }
      });
    }
  },

  add() {
    this.header.classList.add("active");
  },

  remove() {
    this.header.classList.remove("active");
  },
};
