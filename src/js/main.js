import { textField } from "./textField";
// import { phoneMask } from "./phoneMask";
import { mobileMenu } from "./mobileMenu";
import { gumshoe } from "./gumshoe";
import { Slider } from "./slider";
import { PageYOffset } from "./pageYOffset";
import { Modal } from "./modal";
import { Form } from "./modal";

window.addEventListener("load", () => {
  mobileMenu();
  textField();
  // phoneMask();
  gumshoe();
  Slider.init();
  PageYOffset.init();
  Modal.init();
  Form.init();
});
