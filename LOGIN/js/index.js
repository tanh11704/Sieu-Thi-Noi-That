$(document).ready(function () {
  $(".login-parent>form button").click(function (e) {
    e.preventDefault();
    let form = $(this).closest("form");
    let userEmail = $(form).find("input[name='userEmail']").val();
    let userPassword = $(form).find("input[name='userPassword']").val();
    if (userEmail === "admin@gmail.com" && userPassword === "123") {
      swal("Đăng nhập thành công!","","success");
      window.location.href = "../../index.html";
    } else if (userEmail === "admin@gmail.com" && userPassword !== "123") {
      swal("Sai mật khẩu!","","error");
    } else {
      swal("Sai tên đăng nhập!","","error");
    }
  });
});
