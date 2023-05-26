$(document).ready(function () {
  $("#payment-selected").change(function () {
    $("#bank-transfer").addClass("d-none");
    $("#momo-transfer").addClass("d-none");
    var data = $(this).val();
    if (data === "2") {
      $("#bank-transfer").removeClass("d-none");
    }
    if (data === "3") {
      $("#momo-transfer").removeClass("d-none");
    }
  });

  $(".add").click(function () {
    var countElement = $(this).siblings(".count");
    var count = parseInt(countElement.text());
    countElement.text(count + 1);
  });

  $(".minus").click(function () {
    var countElement = $(this).siblings(".count");
    var count = parseInt(countElement.text());
    if (count > 1) {
      countElement.text(count - 1);
    } else {
      if (confirm("Bạn có muốn xóa sản phẩm này?") == true) {
        $(this).parent().parent().parent().parent().parent().addClass("d-none");
      }
    }
  });
});
