export function currentYear() {
  const today = new Date();
  document.getElementById("footer-copyright").innerText = `© 2018-${today.getFullYear()}, Тетаком`;
}
