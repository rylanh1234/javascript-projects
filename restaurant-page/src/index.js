import "./styles.css";
import { initPage } from "./home";
import { menuPage } from "./menu";
import { contactPage } from "./contact";
import dripping from "./assets/dripping.png";
import honeyComb from "./assets/honeycomb.png";
import bee from "./assets/bee.png";

const loadRestaurantPage = (function () {
    initPage();
    menuPage();
    contactPage();
}
)();

const switchTab = (function () {
    let currentPage = "home";
    const menuContainers = document.querySelectorAll(".menuContainer");
    const contactContainers = document.querySelectorAll(".contactContainer");
    const tabBtns = document.querySelectorAll("button");
    tabBtns.forEach((tabBtn, tabBtnIdx) => {
        tabBtn.addEventListener("click", function (e) {
            // homeContainers is here so it also gets honeyCombLarge - could make the combs in their respective js file to avoid this
            const homeContainers = document.querySelectorAll(".homeContainer");
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

const addDecorations = (function () {
    const restaurantName = document.querySelector("#restaurantName");
    const menuLabel = document.querySelector("#menuLabel");
    const contactLabel = document.querySelector("#contactLabel");
    const labels = [restaurantName, menuLabel, contactLabel];

    labels.forEach((label) => {
        // bee img
        const beeImg = document.createElement("img");
        beeImg.src = bee;
        beeImg.classList.add("beeImg", "beeLeft");
        label.appendChild(beeImg);
        const beeRight = beeImg.cloneNode(true); // clone beeImg - true to also clone any nodes
        beeRight.style.transform = "rotate(90deg)";
        beeRight.classList.remove("beeLeft");
        beeRight.classList.add("beeRight");
        label.appendChild(beeRight);
    })

    // honeycomb img for home / endorsement
    const main = document.querySelector("#main");
    const honeyCombImg = document.createElement("img");
    honeyCombImg.src = honeyComb;
    honeyCombImg.classList.add("honeyCombLarge", "homeContainer");
    main.appendChild(honeyCombImg)

    // honeycomb img for itemType
    const itemTypes = document.querySelectorAll(".itemType");
    itemTypes.forEach((itemType) => {
        const honeyCombSmall = document.createElement("img");
        honeyCombSmall.src = honeyComb;
        honeyCombSmall.classList.add("honeyCombSmall");
        itemType.appendChild(honeyCombSmall)
    })
})();