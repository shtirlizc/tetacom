import { textField } from "./textField";
import { phoneMask } from "./phoneMask";
import { mobileMenu } from "./mobileMenu";
import { Slider } from "./slider";
import { PageYOffset } from "./pageYOffset";

window.addEventListener("load", () => {
  mobileMenu();
  textField();
  phoneMask();
  Slider.init();
  PageYOffset.init();
});
