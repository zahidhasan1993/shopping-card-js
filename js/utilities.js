
// common function to display data 
let serial = 1;


function displayData(a,b,c,d,e){
    const productContainer = document.getElementById('table-container');

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${a}</td>
    <td>${b}</td>
    <td>${c}</td>
    <td>${d}</td>
    <td>${e}</td>
    `;
    productContainer.appendChild(tr);

}