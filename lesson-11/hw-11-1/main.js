let addButton = document.getElementById("addButton");

addButton.addEventListener("click", function() {
    if (!document.getElementById("multiplicationTable")) {
        let div = document.createElement("div");
        let table = document.createElement("table")
        table.id = "multiplicationTable";

        for (let i = 1; i <= 10; i++) {
            let row = document.createElement("tr")
            for (let j = 1; j <= 10; j++) {
                let col = document.createElement("td")

                let cellText = document.createTextNode(i * j)

                col.appendChild(cellText);
                row.appendChild(col)
            }
            table.appendChild(row);
        }

        div.appendChild(table);
        addButton.parentNode.insertBefore(div, addButton.nextSibling);
        table.setAttribute("border", "1px solid black");
        table.setAttribute("padding", "10px");
        table.setAttribute("align", "center");
    }
})
