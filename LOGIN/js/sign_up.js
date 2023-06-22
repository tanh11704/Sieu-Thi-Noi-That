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
      swal("Vui lòng đồng ý với các điều khoản của chúng tôi để tiếp tục!","","warning");
    } else if (userEmail === "" || userName === "" || userPassword === "") {
      swal("Vui lòng điền đầy đủ thông tin!","","warning");
    } else if (userPassword !== checkPassword) {
      swal("Hai mật khẩu không khớp nhau!","","error");
    } else {
      swal("Đăng kí thành công!","","success");
    }
  });
});
