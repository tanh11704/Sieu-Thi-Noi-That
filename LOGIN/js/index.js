const container = document.querySelector(".container");
const btnSignIn = document.querySelector(".btnSign-in");
const btnSignUp = document.querySelector(".btnSign-up");

$(document).ready(function () {
  $("#changeRegisterForm").click(function (e) {
    e.preventDefault();
    $(".sign_in").addClass("d-none");
    $(selector).addClass(className);
  });

  $(".sign_in .bkg").click(function (e) {
    e.preventDefault();
    const email = $(".sign_in input[name='email'").val();
    const pass = $(".sign_in input[name='password'").val();
    if (email === "admin@gmail.com" && pass === "123") {
      window.location.href = "../index.html";
    } else {
      alert("Sai tên đăng nhập hoặc mật khẩu!");
    }
  });
});

btnSignIn.addEventListener("click", () => {
  container.classList.add("active");
});

btnSignUp.addEventListener("click", () => {
  container.classList.remove("active");
});
