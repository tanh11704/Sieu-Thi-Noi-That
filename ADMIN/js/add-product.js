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
    let type = $("#inputType").val();
    let costPrice = $("#inputCostPrice").val();
    let sellPrice = $("#inputSellPrice").val();

    if (
      id === "" ||
      name === "" ||
      image === "" ||
      type === "" ||
      costPrice === "" ||
      sellPrice === ""
    ) {
      swal("Lỗi!", "Vui lòng điền đầy đủ thông tin!", "error");
    } else {
      swal("Thành công!", "Thêm sản phẩm thành công!", "success");
    }
  });
});
