
let i = 1;

addNewExpanse = () => {
    //make new row
    let table = document.getElementById("table").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.rows.length);

    //make cells for the row
    let numCell = newRow.insertCell(0);
    let nameCell = newRow.insertCell(1);
    let dateCell = newRow.insertCell(2);
    let amountCell = newRow.insertCell(3);
    let delCell = newRow.insertCell(4);

    //validate checking
    let text1 = i.toString();
    let text2 = document.getElementById("name-input").value;
    if (text2 === ""){
        alert("expense name field is empty");
        return;
    }
    let text3 = document.getElementById("date-input").value;
    if (text3 === ""){
        alert("date field is empty");
        return;
    }
    let text4 = document.getElementById("amount-input").value;
    if (text4 === ""){
        alert("amount field is empty");
        return;
    }


    //delete button to the row
    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.id = "del";
    let btnID = delBtn.id;
    delBtn.innerHTML = "x";
    delBtn.style.padding = "0px";
    //center the btn
    delBtn.style.display = "block";
    delBtn.style.margin = "auto";
    delCell.appendChild(delBtn);
    //if clicked, erase row func
    delBtn.addEventListener('click', function deleteRow(){
        let btn = document.getElementById(btnID);
        let row = btn.parentElement.parentElement;
        row.parentElement.removeChild(row);
    });

    //enter the values to cells in the row
    numCell.innerHTML = text1;
    numCell.style.textAlign = "center";
    nameCell.innerHTML = text2;
    dateCell.innerHTML = text3;
    dateCell.style.textAlign = "center";
    amountCell.innerHTML = text4;
    amountCell.style.textAlign = "center";

    //back to default values
    document.getElementById("name-input").value = "";
    document.getElementById("date-input").value = "";
    document.getElementById("amount-input").value = "0";
    
    i++;
}
