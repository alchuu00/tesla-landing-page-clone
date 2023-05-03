const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const closeNavBtn = document.querySelector(".navigation-close-btn");
const blurOverlay = document.querySelector(".blur-overlay");
const fullpageEl = document.getElementById("fullpage");
const headerLeft = document.querySelector(".header-left");

const image = document.createElement("img");
image.classList.add("header-logo");
headerLeft.appendChild(image);

const IS_ACTIVE = "is-active";

const disableScroll = () => {
  fullpage_api.setAllowScrolling(false);
};

const enableScroll = () => {
  fullpage_api.setAllowScrolling(true);
};

const toggleNavigation = () => {
  navigation.classList.toggle(IS_ACTIVE);
  blurOverlay.classList.toggle(IS_ACTIVE);
  if (navigation.classList.contains(IS_ACTIVE)) {
    disableScroll();
  } else {
    enableScroll();
  }
};

const CLICK = "click";

menuBtn.addEventListener(CLICK, toggleNavigation);
closeNavBtn.addEventListener(CLICK, toggleNavigation);
blurOverlay.addEventListener(CLICK, toggleNavigation);

new fullpage("#fullpage", {
  autoScrolling: true,
  scrollbar: true,
  afterLoad: function (origin, destination, direction) {
    const header = document.querySelector(".header");
    const isSection0 = destination.index == 0;

    if (isSection0) {
      header.classList.add("white-header");
      image.src = "./media/tesla_logo_white.svg";
      const video = document.querySelector('#background-video');
      video.play();
    } else {
      header.classList.remove("white-header");
      image.src = "./media/tesla_logo_black.svg";
    }
  },
});
