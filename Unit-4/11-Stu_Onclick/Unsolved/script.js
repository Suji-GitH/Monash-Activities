//Target the var to html element 
var decrement = document.querySelector("#decrement");
var increment = document.querySelector("#increment")
var count = document.querySelector("#count");

//addEventListener for when button is clicked and function to +1
increment.addEventListener("click", function() {
    count.innerHTML = parseInt(count.innerHTML) + 1;
});

//addEventListener for when button is clicked and function to -1
decrement.addEventListener("click", function() {
    count.innerHTML = parseInt(count.innerHTML) - 1;
});