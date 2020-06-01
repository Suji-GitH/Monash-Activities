//Array of Images

var carouselImage = [{img: "https://via.placeholder.com/300", url: "www.google.com"}, {img: "https://via.placeholder.com/400", url: "www.google.com"}, {img: "https://via.placeholder.com/500", url: "www.google.com"} ]

//Button variables for class = button

var btn = document.querySelector(".buttons");

//When btn is clicked

btn.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.className === "next"){
    console.log(event.target);
    document.querySelector("img").setAttribute(
        "src", carouselImage[1].img
    )
    }
    // if(event.target.matches("prev")){
    //     carouselImage.indexOf[i--];
    // }

});

// if (carouselImage.indexOf[i] = carouselImage.length)
// carouselImage.indexOf[0]



// if(event.target.matches("button")) {
//     var item = document.createElement("div");
//     item.textContent = groceries[event.target.parentElement.id];
//     shoppingCartEl.append(item);
//   }