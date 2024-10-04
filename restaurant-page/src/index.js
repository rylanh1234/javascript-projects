import "./styles.css";
import { initPage } from "./home";

const switchTab = (function () {
    let currentPage = "home";
    const tabBtns = document.querySelectorAll("button");
    tabBtns.forEach((tabBtn) => {
        tabBtn.addEventListener("click", function(e) {
            if (e.target.id != currentPage) {
                if (e.target.id == "home") {
                    menuContainer.style.display = "none";
                    contactContainer.style.display = "none";
                    homeContainer.style.display = "grid";
                    currentPage = "home";
                }
                else if (e.target.id == "menu") {
                    homeContainer.style.display = "none";
                    contactContainer.style.display = "none";
                    menuContainer.style.display = "grid";
                    currentPage = "grid";
                }
                else if (e.target.id == "contact") {
                    homeContainer.style.display = "none";
                    menuContainer.style.display = "none";
                    contactContainer.style.display = "grid";
                    currentPage = "contact";
                }
            }
        })
    })
})();

const loadRestaurantPage = (function() {
    initPage();
}
)();