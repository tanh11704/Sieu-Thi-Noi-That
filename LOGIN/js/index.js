$(document).ready(function () {
  $(".login-parent>form button").click(function (e) {
    e.preventDefault();
    let form = $(this).closest("form");
    let userEmail = $(form).find("input[name='userEmail']").val();
    let userPassword = $(form).find("input[name='userPassword']").val();
    if (userEmail === "" || userPassword === "") {
      Toastify({
        text: "Vui Lòng Điền Đầy Đủ Thông Tin",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #9fccfa, #0974f1)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    } else {
      if (userEmail === "admin@gmail.com" && userPassword === "admin") {
        window.location.href = "../../ADMIN/index.html";
      } else if (userEmail === "user@gmail.com" || userPassword === "user") {
        window.location.href = "../../index.html";
      } else {
        swal("Lỗi!", "Sai tên đăng nhập hoặc mật khẩu!", "error");
      }
    }
  });
});
