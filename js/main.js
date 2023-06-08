document.addEventListener(
  "DOMContentLoaded",
  function () {
    // your code goes here
    var $signUp = document.querySelectorAll(".input_extra a");
    var $container = document.querySelectorAll(".container");
    $signUp.forEach((item) => item.addEventListener("click", toggleClass));

    function toggleClass() {
      $container.forEach((item) => item.classList.toggle("rotation"));
    }
  },
  false
);

function logIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var error = document.getElementById("error");
  var text;
  // document.getElementById("as").innerHTML = x;
  if (email.value === "admin" && password.value === "admin") {
    window.location.replace("/dashboard.html");
  } else {
    text = "Invalid Email or Password";
    error.style.display = "block";
    document.getElementById("error").innerHTML = text;
  }
}

document.getElementById("email").addEventListener("keydown", function () {
  document.getElementById("error").innerHTML = "";
  error.style.display = "none";
});

document.getElementById("password").addEventListener("keydown", function () {
  document.getElementById("error").innerHTML = "";
  error.style.display = "none";
});
