var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

//Key variables

var key = document.querySelector("#key");
var code = document.querySelector("#code");
var status = document.querySelector("#status");

//Mouse variables

var x = document.querySelector("#x");
var y = document.querySelector("#y");

//Toggle selector

function toggleDisplay(event) {
  var value = event.target.value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
};

eventType.addEventListener("change", toggleDisplay);

//Key Pressed

document.addEventListener("keydown", function(event) {
  key.innerHTML = event.key;
  code.innerHTML = event.keyCode;
  status.innerHTML = "key down event";
});

document.addEventListener("keyup", function(event) {
  status.innerHTML = "key up event";
});



//Mouse clicked

document.addEventListener("click", function(event) {
  x.innerHTML = event.x;
  y.innerHTML = event.y;
});