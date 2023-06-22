$(document).ready(function () {
  $(".login-parent>form button").click(function (e) {
    e.preventDefault();
    let form = $(this).closest("form");
    let userName = $(form).find("input[name='userName']").val();
    let userEmail = $(form).find("input[name='userEmail']").val();
    let userPassword = $(form).find("input[name='userPassword']").val();
    let checkPassword = $(form).find("input[name='checkPassword']").val();
    let agree = $(form).find("input[name='agree']").is(":checked");

    if (agree === false) {
<<<<<<< HEAD
      swal("Vui lòng đồng ý với các điều khoản của chúng tôi để tiếp tục!","","warning");
    } else if (userEmail === "" || userName === "" || userPassword === "") {
      swal("Vui lòng điền đầy đủ thông tin!","","warning");
    } else if (userPassword !== checkPassword) {
      swal("Hai mật khẩu không khớp nhau!","","error");
    } else {
      swal("Đăng kí thành công!","","success");
=======
      Toastify({
        text: "Vui Lòng Đồng Ý Với Các Điều Khoản Của Chúng Tôi Để Tiếp Tục!",
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
    } else if (userPassword !== checkPassword) {
      swal("Lỗi!", "Mật khẩu không khớp nhau!", "error");
    } else if (userEmail === "" || userName === "" || userPassword === "") {
      swal("Lỗi!", "Vui lòng điền đầy đủ thông tin!", "error");
    } else {
      swal("Thành công!", "Đăng ký tài khoản thành công!", "success");
>>>>>>> be5b297decb828838c2dcdf94e197538b380767f
    }
  });
});
