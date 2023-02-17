// product - 1 
document.getElementById('first-card').addEventListener('click',function(){
    const productName = document.getElementById('card-name-1').innerText;
    const productPrice = document.getElementById('shoe-price').innerText;
    const productQuantity = document.getElementById('shoe-quantity').innerText;
    let serialNo = serial++;
    const totalPrice = parseFloat(productPrice) * parseFloat(productQuantity);
    // console.log(totalPrice);
    
    // call displaydata function 
    displayData(serialNo ,productName,productPrice,productQuantity,totalPrice);
   //disabled button
   document.getElementById('first-card').setAttribute('disabled', true);

})

// product - 2

document.getElementById('second-card').addEventListener('click', function(e){
    // getting values by targeting parent bubble  
    const productName = e.target.parentNode.parentNode.childNodes[1].innerText;
    const productPrice = e.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
    const productQuantity = e.target.parentNode.parentNode.childNodes[7].childNodes[1].innerText;

    let serialNo = serial++;
    const totalPrice = parseInt(productPrice) * parseInt(productQuantity);
    
    //display data
    displayData(serialNo ,productName,productPrice,productQuantity,totalPrice);
    //disabled button
    document.getElementById('second-card').setAttribute('disabled', true);

})


// product - 3


document.getElementById('third-card').addEventListener('click', function(e){
    // getting values by targeting parent bubble  
    const productName = e.target.parentNode.parentNode.childNodes[1].innerText;
    const productPrice = e.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
    const productQuantity = e.target.parentNode.parentNode.childNodes[7].childNodes[1].innerText;

    let serialNo = serial++;
    const totalPrice = parseInt(productPrice) * parseInt(productQuantity);
    
    //display data
    displayData(serialNo ,productName,productPrice,productQuantity,totalPrice);
    //disabled button
    document.getElementById('third-card').setAttribute('disabled', true);

})


// product - 4



document.getElementById('forth-card').addEventListener('click', function(e){
    // getting values by targeting parent bubble  
    const productName = e.target.parentNode.parentNode.childNodes[1].innerText;
    const productPrice = e.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
    const productQuantity = e.target.parentNode.parentNode.childNodes[7].childNodes[1].innerText;

    let serialNo = serial++;
    const totalPrice = parseInt(productPrice) * parseInt(productQuantity);
    
    //display data
    displayData(serialNo ,productName,productPrice,productQuantity,totalPrice);
    //disabled button
   document.getElementById('forth-card').setAttribute('disabled', true);

})


//product - 5


document.getElementById('fivth-card').addEventListener('click', function(e){

    const productName = e.target.parentNode.parentNode.childNodes[1].innerText;
    const productPrice = e.target.parentNode.parentNode.childNodes[5].value;
    const productQuantity = e.target.parentNode.parentNode.childNodes[7].value;

    let serialNo = serial++;
    const totalPrice = parseInt(productPrice) * parseInt(productQuantity);
    console.log(totalPrice);

    // display data 
    displayData(serialNo ,productName,productPrice,productQuantity,totalPrice);

    //disabled button
    document.getElementById('forth-card').setAttribute('disabled', true);
})