let table = document.getElementById("sampleTable");

function insert_Row() {
    let row = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");

    cell1.innerText = "New Cell1";
    cell2.innerText = "New Cell2";

    row.appendChild(cell1);
    row.appendChild(cell2);

    // insert row at beginning
    table.prepend(row);
}
