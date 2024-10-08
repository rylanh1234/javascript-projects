import "./styles.css";
import { initPage } from "./home";
import { menuPage } from "./menu";
import { contactPage } from "./contact";
import dripping from "./assets/dripping.png";

const loadRestaurantPage = (function () {
    initPage();
    menuPage();
    contactPage();
}
)();

const switchTab = (function () {
    let currentPage = "home";
    const homeContainers = document.querySelectorAll(".homeContainer");
    const menuContainers = document.querySelectorAll(".menuContainer");
    const contactContainers = document.querySelectorAll(".contactContainer");
    const tabBtns = document.querySelectorAll("button");
    tabBtns.forEach((tabBtn, tabBtnIdx) => {
        tabBtn.addEventListener("click", function (e) {
            if (e.target.id != currentPage) {
                if (e.target.id == "home") {
                    menuContainers.forEach((container) => {
                        container.style.display = "none";
                    })
                    contactContainers.forEach((container) => {
                        container.style.display = "none";
                    })
                    homeContainers.forEach((container) => {
                        container.style.display = "grid";
                    })
                    currentPage = "home";
                    tabBtns[1].style.background = "transparent";
                    tabBtns[2].style.background = "transparent";
                    e.target.style.background = "#ECA43B";
                    // const homeImg = tabBtns[0].querySelector(".drippingImg");
                    // const menuImg = tabBtns[1].querySelector(".drippingImg");
                    // const contactImg = tabBtns[2].querySelector(".drippingImg");
                    menuImg.style.display = "none";
                    contactImg.style.display = "none";
                    homeImg.style.display = "grid";
                }
                else if (e.target.id == "menu") {
                    homeContainers.forEach((container) => {
                        container.style.display = "none";
                    })
                    contactContainers.forEach((container) => {
                        container.style.display = "none";
                    })
                    menuContainers.forEach((container) => {
                        container.style.display = "grid";
                    })
                    currentPage = "grid";
                    tabBtns[0].style.background = "transparent";
                    tabBtns[2].style.background = "transparent";
                    e.target.style.background = "#ECA43B";
                    // const homeImg = tabBtns[0].querySelector(".drippingImg");
                    // const menuImg = tabBtns[1].querySelector(".drippingImg");
                    // const contactImg = tabBtns[2].querySelector(".drippingImg");
                    homeImg.style.display = "none";
                    contactImg.style.display = "none";
                    menuImg.style.display = "grid";
                }
                else if (e.target.id == "contact") {
                    homeContainers.forEach((container) => {
                        container.style.display = "none";
                    })
                    menuContainers.forEach((container) => {
                        container.style.display = "none";
                    })
                    contactContainers.forEach((container) => {
                        container.style.display = "grid";
                    })
                    currentPage = "contact";
                    tabBtns[0].style.background = "transparent";
                    tabBtns[1].style.background = "transparent";
                    e.target.style.background = "#ECA43B";
                    // const homeImg = tabBtns[0].querySelector(".drippingImg");
                    // const menuImg = tabBtns[1].querySelector(".drippingImg");
                    // const contactImg = tabBtns[2].querySelector(".drippingImg");
                    homeImg.style.display = "none";
                    menuImg.style.display = "none";
                    contactImg.style.display = "grid";
                }
            }
        })
        if (tabBtnIdx > 0) {
            const drippingImg = document.createElement("img");
            drippingImg.src = dripping;
            drippingImg.classList.add("drippingImg");
            drippingImg.style.display = "none";
            tabBtn.appendChild(drippingImg);
        }
    })
    const homeImg = tabBtns[0].querySelector(".drippingImg");
    const menuImg = tabBtns[1].querySelector(".drippingImg");
    const contactImg = tabBtns[2].querySelector(".drippingImg");
})();