let selectedRow = null

function onFormSubmit(){
var formData = readFormData();
 if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }

}

function readFormData() {

   let formData = {};
    formData["Name"] = document.getElementById("name").value;
    formData["Email"] = document.getElementById("email").value;
    formData["Phone"] = document.getElementById("phone").value;
    formData["Roll"] = document.getElementById("roll").value;

    return formData;
}

function insertNewrecord(data){
    var table = document.getElementById(userlist).getElementById('tbody')[0];
    var newrow = table.insertRow(table.length);
    cell1 = newrow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newrow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newrow.insertCell(2);
    cell3.innerHTML = data.phone;
    cell5 = newrow.insertCell(6);
    cell5.innerHTML = data.roll;



}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
    document.getElementById("roll").value = selectedRow.cells[6].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.phone;
    selectedRow.cells[6].innerHTML = formData.roll;
}

function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("name").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("name").classList.contains("hide"))
            document.getElementById("name").classList.add("hide");
    }
    return isValid;
}