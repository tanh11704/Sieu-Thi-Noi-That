$(document).ready(function () {
  $("#inputImage").on("input", function () {
    var imageUrl = $(this).val();
    $("#productImage").css("background-image", "url(" + imageUrl + ")");
  });
  $("#save").click(function (e) {
    e.preventDefault();
    let id = $("#inputId").val();
    let name = $("#inputName").val();
    let image = $("#inputImage").val();
    let mail = $("#inputMail").val();
    let phone = $("#inputPhone").val();

    if (
      id === "" ||
      name === "" ||
      image === "" ||
      mail === "" ||
      phone === ""
    ) {
      swal("Lỗi!", "Vui lòng điền đầy đủ thông tin!", "error");
    } else {
      swal("Thành công!", "Thêm tài khoản thành công!", "success");
    }
  });
});
