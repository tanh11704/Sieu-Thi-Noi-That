const container = document.querySelector(".container");
const btnSignIn = document.querySelector(".btnSign-in");
const btnSignUp = document.querySelector(".btnSign-up");

$(document).ready(function () {
  $("#changeRegisterForm").click(function (e) {
    e.preventDefault();
    $(".sign_in").addClass("d-none");
    $(selector).addClass(className);
  });
});

btnSignIn.addEventListener("click", () => {
  container.classList.add("active");
});

btnSignUp.addEventListener("click", () => {
  container.classList.remove("active");
});
