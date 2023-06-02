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
      alert("Vui lòng đồng ý với các điều khoản của chúng tôi để tiếp tục!");
    } else if (userPassword !== checkPassword) {
      alert("Hai mật khẩu không khớp nhau!");
    } else if (userEmail === "" || userName === "" || userPassword === "") {
      alert("Vui lòng điền đầy đủ thông tin!");
    } else {
      alert("Đăng kí thành công!");
    }
  });
});
