import "./styles.css";
import { initPage } from "./home";
import { menuPage } from "./menu";
import { contactPage } from "./contact";

const loadRestaurantPage = (function() {
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
    tabBtns.forEach((tabBtn) => {
        tabBtn.addEventListener("click", function(e) {
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
                }
            }
        })
    })
})();