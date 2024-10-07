function contactPage() {
    const contactContainer = document.createElement("div"); // container for the page
    contactContainer.classList.add("contactContainer");
    const contactLabelContainer = document.createElement("div");
    contactLabelContainer.classList.add("mainContainers");
    contactLabelContainer.setAttribute("id", "contactLabelContainer");
    const contactLabel = document.createElement("div");
    contactLabel.setAttribute("id", "contactLabel");
    contactLabel.textContent = "Contact Us";
    contactLabelContainer.appendChild(contactLabel);
    contactContainer.appendChild(contactLabelContainer);

    const contactsMama = ["Mama Bear", "Chef", "555-555-5554", "totallyRealEmail@notFake.com"];
    const contactsPapa = ["Papa Bear", "Manager", "555-555-5555", "perfectlyRealEmail@notFake.com"];
    const contactsBaby = ["Baby Bear", "Waiter", "555-555-5556", "totallyRealEmail@notFake.com"];
    const contacts = [contactsMama, contactsPapa, contactsBaby];
    contacts.forEach((contact) => {
        // container and group for each contact
        const infoContainer = document.createElement("div");
        infoContainer.classList.add("mainContainers", "infoContainer");
        const infoGroup = document.createElement("div");
        infoGroup.classList.add("infoGroup");
        contact.forEach((contactInfo) => {
            // div for each piece of contact info
            const infoDiv = document.createElement("div");
            infoDiv.textContent = contactInfo;
            infoGroup.appendChild(infoDiv);
        })
        infoContainer.appendChild(infoGroup);
        contactContainer.appendChild(infoContainer);
    })
    main.appendChild(contactContainer)
}

export { contactPage }