  const main = document.querySelector("#main");
  const btnMenu = document.querySelector(".burger");
const menu = document.querySelector(".menu");
  const headerMain = document.querySelector(".header-main");
  let h1 = document.querySelectorAll("h1");
  let p = document.querySelectorAll("p")
  btnMenu.addEventListener("click", function () {
    menu.classList.toggle("active");
    btnMenu.classList.toggle("burgerActive");
      main.classList.toggle("mainActive");
      headerMain.classList.toggle("header-active");
      h1.forEach((item) => {
        item.classList.toggle("h1active");
      });
      p.forEach((item) => {
          item.classList.toggle("pactive");
      });
  });