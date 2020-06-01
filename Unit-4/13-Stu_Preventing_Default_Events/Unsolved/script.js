//Target elements
var totalMealPrice = document.querySelector("#meal-Price"); 
var tipPercentage = document.querySelector("#tip-Percent"); 
var tipAmount = document.querySelector("#tip-amount"); 
var totalCost = document.querySelector("#new-total");
var submit = document.querySelector("#submit");


//addEventListener for calculating Tip
submit.addEventListener("click", function(event) {
    event.preventDefault();

    var tipAmountCalc = totalMealPrice.value * (tipPercentage.value / 100);
    tipAmount.innerHTML = "$" + tipAmountCalc;

    var totalCostCalc = (tipAmountCalc + totalMealPrice.value);
    totalCost.innerHTML = "$" + totalCostCalc;  
});

