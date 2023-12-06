console.log('file added');
function handleSubmitForm(event){
    console.log(event);
    event.preventDefault();
    let firstNameVal=document.querySelector('#firstName');
    let lastNameVal=document.querySelector('#lastName');
    let idVal=document.querySelector('#ID');
    let titleVal=document.querySelector('#title');
    let annualSalaryVal=document.querySelector('#annualSalary');
    let employeeTable=document.querySelector('#employeeTable');

    employeeTable.innerHTML += 
        `
        <tr>
            <td>${firstNameVal.value}</td>
            <td>${lastNameVal.value}</td>
            <td>${idVal.value}</td>
            <td>${titleVal.value}</td>
            <td>${annualSalaryVal.value}</td>
            <td><button onclick="deleteRow(event); getTotalCost(event)">Delete</button></td>
        </tr>
        `
    firstNameVal.value='';
    lastNameVal.value='';
    idVal.value='';
    titleVal.value='';
    annualSalaryVal.value='';
}

function deleteRow (event) {
    console.log('delete row');
    console.log(event.target.parentNode.parentNode.rowIndex);
    let del=event.target.parentNode.parentNode.rowIndex
    let table=document.querySelector("#employees");
    table.deleteRow(del);
    event.preventDefault();

}

function getTotalCost(event){
    
    let table=document.querySelector('#employees');
    let total=0;
    for(let i=1; i<table.rows.length;i++){
        let sal=table.rows[i].cells[4].innerHTML;
        total+=Number(sal);
    }
    let pcost=document.querySelector('#total-cost');
    pcost.innerHTML=`Total Monthly: ${total}`;

}