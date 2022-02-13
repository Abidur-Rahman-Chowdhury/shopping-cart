function updateProductNumber(product, isIncreasing ,price) {
    const productInput = document.getElementById(product +'-number');
    let productNumber = productInput.value;
   
    if (isIncreasing) {
        productNumber= parseInt(productNumber) + 1;
       
        
    } else if(productNumber>0) {
        productNumber = parseInt(productNumber) - 1;

    }
    productInput.value = productNumber;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // calculate total;

    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product +'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;

}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const CaseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + CaseTotal;
    const taxAmount = parseFloat(subTotal * (10 / 100)).toFixed(2);
    const totalAmount = parseFloat (subTotal) + parseFloat( taxAmount);
// update subtotal 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalAmount;




}
// handel phone increase decrease event

document.getElementById('phone-plus').addEventListener('click', function () {
    let price = 1219;
    updateProductNumber('phone', true,price);
    
})
document.getElementById('phone-minus').addEventListener('click', function () {
    let price = 1219;
    updateProductNumber('phone', false,price);

})


// handel case increase decrease event 
document.getElementById("case-plus").addEventListener("click", function () {
    let price = 59;
    updateProductNumber('case',true,price);
});

document.getElementById('case-minus').addEventListener('click', function () {
    let price = 59;
    updateProductNumber('case',false,price);

})