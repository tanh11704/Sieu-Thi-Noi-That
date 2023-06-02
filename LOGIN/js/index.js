$(document).ready(function () {
  $(".login-parent>form button").click(function (e) {
    e.preventDefault();
    let form = $(this).closest("form");
    let userEmail = $(form).find("input[name='userEmail']").val();
    let userPassword = $(form).find("input[name='userPassword']").val();
    if (userEmail === "admin@gmail.com" && userPassword === "123") {
      alert("Đăng nhập thành công!");
      window.location.href = "../../index.html";
    } else if (userEmail === "admin@gmail.com" && userPassword !== "123") {
      alert("Sai mật khẩu!");
    } else {
      alert("Sai tên đăng nhập!");
    }
  });
});
