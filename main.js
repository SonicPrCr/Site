const burger = document.querySelector(".burger");
const close__button = document.querySelector(".close__button");
const menu__overlay = document.querySelector(".menu");

console.log("@", close__button);

console.log("@", menu__overlay);

burger.addEventListener("click", () => {
  menu__overlay.classList.add("overlay__open");

  close__button.addEventListener("click", () => {
    menu__overlay.classList.remove("overlay__open");
  });
});
