window.addEventListener("DOMContentLoaded", () => {
  //pre loader script
  const preLoader = document.querySelector("#pre-loader");
  window.addEventListener("load", () => (preLoader.style.display = "none"));

  const menuBtn = document.querySelector("#header .menu-btn");
  const menu = document.querySelector("#header .menu");
  const listItems = document.querySelectorAll("#header .menu-list li");
  const navBar = document.querySelector("#header nav");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
  });
  listItems.forEach((li) => {
    li.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      menu.classList.toggle("active");
      listItems.forEach((li) => li.classList.remove("active"));
      li.classList.add("active");
    });
  });

  window.addEventListener("scroll", (e) => {
    let scroll = this.scrollY;

    switch (true) {
      case scroll < 400:
        menu.classList.remove("scrolled");
        navBar.classList.remove("scrolled");
        listItems.forEach((li) => li.classList.remove("active"));
        listItems[0].classList.add("active");
        break;
      case scroll > 400:
        menu.classList.add("scrolled");
        listItems.forEach((li) => li.classList.remove("active"));
        listItems[1].classList.add("active");
        navBar.classList.add("scrolled");
        break;

      default:
        break;
    }
  });
});
