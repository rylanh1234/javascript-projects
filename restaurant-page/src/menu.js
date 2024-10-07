function menuPage() {
    const menuLabelContainer = document.createElement("div");
    menuLabelContainer.classList.add("mainContainers", "menuContainer");
    menuLabelContainer.setAttribute("id", "menuLabelContainer");
    main.appendChild(menuLabelContainer)
    const menuLabel = document.createElement("div");
    menuLabel.setAttribute("id", "menuLabel");
    menuLabel.textContent = "Menu";
    menuLabelContainer.appendChild(menuLabel);

    const itemTypes = ["Beverages", "Sides", "Main Dishes"];
    const beverages = ["Honey Tea", "Beary Tea"];
    const beverageDescriptions = ["A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!",
        "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request."];
    const beveragePrices = ["$2", "$3"];
    const sides = ["Toast and Jam", "Fresh Fruit"];
    const sidesDescriptions = ["A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.",
        "A small bowl of fresh fruit, whatever we find at the market for the day."
    ];
    const sidesPrices = ["$1", "$3"];
    const mainDishes = ["Pancakes", "French Toast", "Beary Veggie Sandwich", "BLT", "Bagel and Lox", "Honeycomb", "Beary Bowl", "The Beary Best Porridge"];
    const mainDishesDescriptions = ["A stack of homemade buttermilk pancakes, sereved with our locally sourced maple syrup.",
        "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.",
        "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.",
        "Interest in the Beary Veggie Sandwich but also love bacon? Say no more.",
        "Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.",
        "Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.",
        "Get a big ole bowl of our berries! Side of honey is $1 extra",
        "Made by Baby Bear himself, this porridge is guaranteed to be just right, or your money back."
    ];
    const mainDishesPrices = ["$4", "$5", "$8", "$6", "$8", "$6", "$7", "$5"]

    itemTypes.forEach((itemType, itemTypesIdx) => {
        // divs for itemTypes
        const typeContainer = document.createElement("div");
        typeContainer.classList.add("mainContainers", "menuContainer", "typeContainer");
        main.appendChild(typeContainer)
        const type = document.createElement("div");
        type.classList.add("itemType");
        type.textContent = itemType;
        typeContainer.appendChild(type);
        // divs for the menu items
        if (itemTypesIdx == 0) {
            beverages.forEach((beverage, beverageIdx) => {
                const beverageContainer = document.createElement("div");
                beverageContainer.classList.add("mainContainers", "menuContainer", "itemContainer");
                main.appendChild(beverageContainer);
                const itemGroup = document.createElement("div");
                itemGroup.classList.add("itemGroup");
                const item = document.createElement("div");
                item.classList.add("label");
                item.textContent = beverage;
                const itemDescription = document.createElement("div");
                itemDescription.classList.add("mainText");
                itemDescription.textContent = beverageDescriptions[beverageIdx];
                const itemPrice = document.createElement("div");
                itemPrice.classList.add("label");
                itemPrice.textContent = beveragePrices[beverageIdx];
                const itemImgDiv = document.createElement("div");
                itemImgDiv.classList.add("itemImgDiv");
                itemGroup.appendChild(item);
                itemGroup.appendChild(itemDescription);
                itemGroup.appendChild(itemPrice);
                itemGroup.appendChild(itemImgDiv);
                beverageContainer.appendChild(itemGroup);
            })
        }
        else if (itemTypesIdx == 1) {
            sides.forEach((side, sideIdx) => {
                const sideContainer = document.createElement("div");
                sideContainer.classList.add("mainContainers", "menuContainer", "itemContainer");
                main.appendChild(sideContainer);
                const itemGroup = document.createElement("div");
                itemGroup.classList.add("itemGroup");
                const item = document.createElement("div");
                item.classList.add("label");
                item.textContent = side;
                const itemDescription = document.createElement("div");
                itemDescription.classList.add("mainText");
                itemDescription.textContent = sidesDescriptions[sideIdx];
                const itemPrice = document.createElement("div");
                itemPrice.classList.add("label");
                itemPrice.textContent = sidesPrices[sideIdx];
                const itemImgDiv = document.createElement("div");
                itemImgDiv.classList.add("itemImgDiv");
                itemGroup.appendChild(item);
                itemGroup.appendChild(itemDescription);
                itemGroup.appendChild(itemPrice);
                itemGroup.appendChild(itemImgDiv);
                sideContainer.appendChild(itemGroup);
            })
        }
        else {
            mainDishes.forEach((mainDish, mainDishIdx) => {
                const mainDishContainer = document.createElement("div");
                mainDishContainer.classList.add("mainContainers", "menuContainer", "itemContainer");
                main.appendChild(mainDishContainer);
                const itemGroup = document.createElement("div");
                itemGroup.classList.add("itemGroup");
                const item = document.createElement("div");
                item.classList.add("label");
                item.textContent = mainDish;
                const itemDescription = document.createElement("div");
                itemDescription.classList.add("mainText");
                itemDescription.textContent = mainDishesDescriptions[mainDishIdx];
                const itemPrice = document.createElement("div");
                itemPrice.classList.add("label");
                itemPrice.textContent = mainDishesPrices[mainDishIdx];
                const itemImgDiv = document.createElement("div");
                itemImgDiv.classList.add("itemImgDiv");
                itemGroup.appendChild(item);
                itemGroup.appendChild(itemDescription);
                itemGroup.appendChild(itemPrice);
                itemGroup.appendChild(itemImgDiv);
                mainDishContainer.appendChild(itemGroup);
            })
        }
    });
}
export { menuPage };

