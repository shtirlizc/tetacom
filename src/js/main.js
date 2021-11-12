// import { textField } from "./textField";
// import { phoneMask } from "./phoneMask";
import { mobileMenu } from "./mobileMenu";
import { Slider } from "./slider";
import { PageYOffset } from "./pageYOffset";
import { gumshoe } from "./gumshoe";

window.addEventListener("load", () => {
  mobileMenu();
  // textField();
  // phoneMask();
  gumshoe();
  Slider.init();
  PageYOffset.init();
});
