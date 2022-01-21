import { textField } from "./textField";
// import { phoneMask } from "./phoneMask";
import { mobileMenu } from "./mobileMenu";
import { gumshoe } from "./gumshoe";
import { currentYear } from "./currentYear";
import { map } from "./map";
import { Slider } from "./slider";
import { PageYOffset } from "./pageYOffset";
import { Modal } from "./modal";
import { Form } from "./modal";
import { Dropdown } from "./dropdown";

window.addEventListener("load", () => {
  mobileMenu();
  textField();
  // phoneMask();
  gumshoe();
  currentYear();
  map();
  Slider.init();
  PageYOffset.init();
  Modal.init();
  Form.init();
  Dropdown.init();
});
