document.addEventListener("DOMContentLoaded", () => {
    const xmlId = sessionStorage.getItem("selectedXML");
    const direction = sessionStorage.getItem("selectedDirection");

    if (!xmlId || !direction) {
        console.error("Nebolo vybrané žiadne XML.");
        return;
    }

    const xmlFile = `exits/${direction}/${xmlId}.xml`;

    loadSignFromXML(xmlFile);
});
async function loadSignFromXML(xmlFile) {
    try {
        const response = await fetch(xmlFile);
        const xmlText = await response.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");

        // --- STRAIGHT TEXT ---
        const straight = xmlDoc.getElementsByTagName("straight")[0];
        const straightLines = [...straight.getElementsByTagName("line")];
        document.getElementById("straight").innerHTML =
            straightLines.map(l => l.textContent).join("<br>");

        // --- EXIT TEXT ---
        const exit = xmlDoc.getElementsByTagName("exit")[0];
        const exitLines = [...exit.getElementsByTagName("line")];
        document.getElementById("exit").innerHTML =
            exitLines.map(l => l.textContent).join("<br>");

        // --- STRAIGHT TAG IMAGES ---
        const straightTags = straight.getElementsByTagName("tags")[0];
        const straightImgs = [...straightTags.getElementsByTagName("img")];
        const straightContainer = document.getElementById("road-tags-straight");
        straightContainer.innerHTML = "";

        straightImgs.forEach(imgNode => {
            const img = document.createElement("img");
            img.src = imgNode.textContent;
            img.classList.add("road-tag");
            straightContainer.appendChild(img);
        });

        // --- EXIT TAG IMAGES ---
        const exitTags = exit.getElementsByTagName("tags")[0];
        const exitImgs = [...exitTags.getElementsByTagName("img")];
        const exitContainer = document.getElementById("road-tags-exit");
        exitContainer.innerHTML = "";

        exitImgs.forEach(imgNode => {
            const img = document.createElement("img");
            img.src = imgNode.textContent;
            img.classList.add("road-tag");
            exitContainer.appendChild(img);
        });

    } catch (err) {
        console.error("Chyba pri naèítaní XML:", err);
    }
}
