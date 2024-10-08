import honeycombPattern from "./assets/honeycombbg.jpg";
import beeImg from "./assets/honeycomb.png";
import honeycombImg from "./assets/bee.png";
import dripping from "./assets/dripping.png";

function initPage() {
    const content = document.querySelector("#content");
    const background = document.createElement("img");
    background.src = honeycombPattern;
    background.setAttribute("id", "background")
    // content.appendChild(background);
    content.style.backgroundImage = `url(${honeycombPattern})`

    const main = document.createElement("div");
    main.setAttribute("id", "main");
    content.appendChild(main);

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("mainContainers", "homeContainer");
    nameContainer.setAttribute("id", "nameContainer");
    main.appendChild(nameContainer)
    const restaurantName = document.createElement("div");
    restaurantName.setAttribute("id", "restaurantName");
    restaurantName.textContent = "Beary's Breakfast Bar";
    nameContainer.appendChild(restaurantName);

    const endorsementContainer = document.createElement("div");
    endorsementContainer.classList.add("mainContainers", "homeContainer");
    endorsementContainer.setAttribute("id", "endorsementContainer");
    main.appendChild(endorsementContainer)
    const endorsementGroup = document.createElement("div");
    endorsementGroup.classList.add("mainGroup");
    endorsementGroup.setAttribute("id", "endorsementGroup");
    const goldilocksEndorsement = document.createElement("div");
    goldilocksEndorsement.classList.add("mainText");
    goldilocksEndorsement.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    const goldilocks = document.createElement("div");
    goldilocks.setAttribute("id", "goldilocks");
    goldilocks.textContent = "Goldilocks";
    endorsementGroup.appendChild(goldilocksEndorsement);
    endorsementGroup.appendChild(goldilocks);
    endorsementContainer.appendChild(endorsementGroup);

    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("mainContainers", "homeContainer");
    hoursContainer.setAttribute("id", "hoursContainer");
    main.appendChild(hoursContainer);
    const hoursGroup = document.createElement("div");
    hoursGroup.classList.add("mainGroup");
    hoursGroup.setAttribute("id", "hoursGroup");
    const hoursLabel = document.createElement("div");
    hoursLabel.classList.add("label");
    hoursLabel.textContent = "Hours";
    const hours = document.createElement("ul");
    hours.classList.add("mainText");
    const hoursArray = ["Sunday: 8am - 8pm", "Monday: 6am - 6pm", "Tuesday: 6am - 6pm", "Wednesday: 6am - 6pm", "Thursday: 6am - 10pm", "Friday: 6am - 10pm", "Saturday: 8am - 10pm", ]
    hoursArray.forEach(day => {
        const liDay = document.createElement("li");
        liDay.textContent = day;
        hours.appendChild(liDay);
    })
    hoursGroup.appendChild(hoursLabel);
    hoursGroup.appendChild(hours);
    hoursContainer.appendChild(hoursGroup);

    const locationContainer = document.createElement("div");
    locationContainer.classList.add("mainContainers", "homeContainer");
    locationContainer.setAttribute("id", "locationContainer");
    main.appendChild(locationContainer)
    const locationGroup = document.createElement("div");
    locationGroup.classList.add("mainGroup");
    locationGroup.setAttribute("id", "locationGroup");
    const locationLabel = document.createElement("div");
    locationLabel.classList.add("label");
    locationLabel.textContent = "Location";
    const location = document.createElement("div");
    location.classList.add("mainText");
    location.textContent = "123 Forest Drive, Forestville, Maine";
    locationGroup.appendChild(locationLabel);
    locationGroup.appendChild(location);
    locationContainer.appendChild(locationGroup);

    const footer = document.createElement("footer");
    document.body.appendChild(footer);

    const homeBtn = document.querySelector("#home");
    const drippingImg = document.createElement("img");
    drippingImg.src = dripping;
    drippingImg.classList.add("drippingImg");
    homeBtn.appendChild(drippingImg);
}

export { initPage };
// <a href="https://www.flaticon.com/free-icons/bee" title="bee icons">Bee icons created by Smashicons - www.flaticon.com</a>
// <a href="https://www.flaticon.com/free-icons/honeycomb" title="honeycomb icons">Honeycomb icons created by Freepik - www.flaticon.com</a>
// <a href="https://www.freepik.com/free-vector/honey-comb-pattern_7997316.htm#fromView=search&page=1&position=10&uuid=6e0a4742-1530-4a88-aec9-5717a17f409f" title="honey comb patterns">Background image created by dgim-studio - www.freepik.com</a>
