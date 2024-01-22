var table = document.createElement("table");

for (var i = 0; i < 10; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < 10; j++) {
        var cellValue = i * 10 + j + 1;

        var cell = document.createElement("td");

        cell.textContent = cellValue;

        row.appendChild(cell);
    }

    table.appendChild(row);
}

document.body.appendChild(table);
