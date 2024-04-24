const container = document.querySelector(".container");

let createGrid = function (value) {
    for (let index = 0; index < value; index++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let index = 0; index < value; index++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);

            square.addEventListener("mouseover", () => {
                square.classList.add("color");
            })
        }

        container.appendChild(row);
    }
}

createGrid(16);

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let value = prompt("Number of squares");

    while (value > 100) {
        alert("Value cannot be above 100");
        value = prompt("Number of squares");
    }

    const nodes = Array.from(container.childNodes);

    nodes.forEach((node) => container.removeChild(node));

    createGrid(value);
});