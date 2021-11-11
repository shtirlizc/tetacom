import { textField } from "./textField";
import { phoneMask } from "./phoneMask";
import { Slider } from "./slider";

window.addEventListener("load", () => {
  textField();
  phoneMask();
  Slider.init();
});
