const nav = document.getElementById("nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
var sticky = document.getElementById("sticky");
var stickyHeaderTop = nav.offsetTop;
function handleScroll() {
  if (window.scrollY > stickyHeaderTop) {
    nav.style.position = "fixed";
    nav.style.top = "0px";
    nav.style.zIndex = "999";
    nav.style.backgroundColor = "#051922";
    sticky.style.display = "block";
  } else {
    nav.style.position = "fixed";
    nav.style.background = "transparent";
    sticky.style.display = "none";
  }
}
window.onscroll = handleScroll;
