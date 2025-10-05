let table = document.getElementById("sampleTable");
function insert_Row() {
    //Write your code here
	let row =  document.createElement("tr");
  let data1 = document.createElement("td");
	let data2 = document.createElement("td");
	data1.innerText = "New Cell1";
	data2.innerText = "New Cell2";
	row.appendChild(data1);
	row.appendChild(data2); 
	table.prepend(row);
	//alert("hi");
  
}
