const menuBtn = document.querySelector(".menu-btn")
const navigation = document.querySelector(".navigation")
const closeNavBtn = document.querySelector(".navigation-close-btn")
const blurOverlay = document.querySelector(".blur-overlay")

const IS_ACTIVE = "is--active"

const toggleNavigation = () => {
    navigation.classList.toggle(IS_ACTIVE)
    blurOverlay.classList.toggle(IS_ACTIVE)
}

const CLICK = "click"

menuBtn.addEventListener(CLICK, toggleNavigation)
closeNavBtn.addEventListener(CLICK, toggleNavigation)

new fullpage('#fullpage', {autoScrolling: true, scrollbar: true})

