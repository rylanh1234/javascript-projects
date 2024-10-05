function menuPage() {
    const itemTypes = ["Beverages", "Sides", "Main Dishes"];
    const beverages = ["Honey Tea", "Beary Tea"];
    const sides = ["Toast and Jam", "Fresh Fruit"];
    const mainDishes = ["Pancakes", "French Toast", "Beary Veggie Sandwich", "BLT", "Bagel and Lox", "Honeycomb", "Beary Bowl", "The Beary Best Porridge"];

    itemTypes.forEach((itemType) => {
        const typeContainer = document.createElement("div");
        typeContainer.classList.add("mainContainers", "menuContainer", "typeContainer");
        main.appendChild(typeContainer)
        const type = document.createElement("div");
        type.classList.add("itemType");
        type.textContent = itemType;
        nameContainer.appendChild(restaurantName);
    })
};

export { menuPage };