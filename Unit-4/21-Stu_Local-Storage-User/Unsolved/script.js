var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");


var saveEmail = localStorage.getItem("saveEmail");

var savePwd = localStorage.getItem("savePwd");


renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var saveEmail = localStorage.getItem("saveEmail");
  var savePwd = localStorage.getItem("savePwd");

 if (email === null && password === null) {
   return;
 }
 userEmailSpan.innerHTML = saveEmail;
 userPasswordSpan.innerHTML = savePwd;

}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

  // Save email and password to localStorage and render the last registered.
  
  //Save email
  saveEmail = emailInput.value;
  console.log(saveEmail);

  localStorage.setItem("saveEmail", saveEmail)

  //Save pwd
  savePwd = passwordInput.value;
  console.log(savePwd);

  localStorage.setItem("savePwd", savePwd);

  //render 
  renderLastRegistered();

  }

});
