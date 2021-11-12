export const Dropdown = {
  dropdownButtons: document.querySelectorAll(".js-dropdown"),

  init() {
    this.dropdownButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const parent = btn.parentNode;
        this.open(parent);

        parent.querySelector("._dropdown__bg").addEventListener("click", () => {
          this.close(parent);
        });
      });
    });
  },

  open(dropdown) {
    const bg = dropdown.querySelector("._dropdown__bg");
    const body = dropdown.querySelector("._dropdown__body");

    bg.classList.add("active");
    body.classList.add("active");
    setTimeout(() => {
      body.classList.add("visible");
    }, 20);
  },

  close(dropdown) {
    const bg = dropdown.querySelector("._dropdown__bg");
    const body = dropdown.querySelector("._dropdown__body");

    bg.classList.remove("active");
    body.classList.remove("visible");
    setTimeout(() => {
      body.classList.remove("active");
    }, 300);
  },
};
