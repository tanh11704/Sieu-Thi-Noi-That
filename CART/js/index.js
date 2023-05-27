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
    loadPrice();
  });

  $(".minus").click(function () {
    var countElement = $(this).siblings(".count");
    var count = parseInt(countElement.text());
    if (count > 1) {
      countElement.text(count - 1);
      loadPrice();
    } else {
      if (confirm("Bạn có muốn xóa sản phẩm này?") == true) {
        $(this).parent().parent().parent().parent().parent().addClass("d-none");
      }
    }
  });

  $(".content__body__products input[type='checkbox']").click(function (e) {
    let pricesTotal = 0;
    let checkedElement = $(
      ".content__body__products input[type='checkbox']:checked"
    );
    let listProductsCheckedElement = $(checkedElement).closest(".card-body");
    console.log(listProductsCheckedElement);
    for (let i = 0; i < listProductsCheckedElement.length; i++) {
      pricesTotal += parseFloat(
        $(listProductsCheckedElement[i])
          .find(".priceTotal")
          .text()
          .replaceAll(",", "")
      );
    }
    $(".pricesTotal").text(pricesTotal.toLocaleString());
  });

  $(".content__body__form input[name='txtName']").change(function (e) {
    let val = $(this).val();
    if (val === "") {
      $(this).css("border-color", "red");
      $(this).closest("div").find("small").eq(0).removeClass("d-none");
      $(this).closest("div").find("small").eq(1).addClass("d-none");
    } else {
      $(this).css("border-color", "green");
      $(this).closest("div").find("small").eq(0).addClass("d-none");
      $(this).closest("div").find("small").eq(1).removeClass("d-none");
    }
  });

  $(".content__body__form input[name='txtPhone']").change(function (e) {
    let val = $(this).val();
    if (checkPhoneNumber(val) === false) {
      $(this).css("border-color", "red");
      $(this).closest("div").find("small").eq(0).removeClass("d-none");
      $(this).closest("div").find("small").eq(1).addClass("d-none");
    } else {
      $(this).css("border-color", "green");
      $(this).closest("div").find("small").eq(0).addClass("d-none");
      $(this).closest("div").find("small").eq(1).removeClass("d-none");
    }
  });

  $(".content__body__form input[name='txtMail']").change(function (e) {
    let val = $(this).val();
    if (checkMail(val) === false) {
      $(this).css("border-color", "red");
      $(this).closest("div").find("small").eq(0).removeClass("d-none");
      $(this).closest("div").find("small").eq(1).addClass("d-none");
    } else {
      $(this).css("border-color", "green");
      $(this).closest("div").find("small").eq(0).addClass("d-none");
      $(this).closest("div").find("small").eq(1).removeClass("d-none");
    }
  });

  $(".content__body__form select").change(function (e) {
    if ($(this).val() > 0) {
      $(this).css("border-color", "green");
    } else {
      $(this).css("border-color", "red");
    }
  });

  $(".content__body__form").submit(function (e) {
    e.preventDefault();
    let totalPrice = parseFloat($(this).find(".pricesTotal").text());
    let fullName = $(this).find('input[name="txtName"]').val();
    let phoneNumber = $(this).find('input[name="txtPhone"]').val();
    let email = $(this).find('input[name="txtMail"]').val();
    let province = $(this).find('select[name="province"]').val();
    let district = $(this).find('select[name="district"]').val();
    let paymentMethod = $(this).find('#payment-selected"]').val();
    console.log(province);
    if (totalPrice === 0) {
      alert("Vui lòng chọn sản phẩm để thanh toán!");
    }

    if (fullName.length == 0) {
      alert("Vui lòng nhập họ tên của bạn!");
    }

    if (checkPhoneNumber(phoneNumber) === false) {
      alert("Vui lòng nhập đúng định dạng số điện thoại!");
    }

    if (checkMail(email) === false) {
      alert("Vui lòng nhập đúng định dạng email!");
    }

    if (province === 0) {
      alert("Vui lòng chọn Tỉnh thành của bạn!");
    }

    if (district === 0) {
      alert("Vui lòng chọn Huyện của bạn!");
    }

    if (paymentMethod === 0) {
      alert("Vui lòng chọn hình thức thanh toán!");
    }
  });
});

loadPrice();

function loadPrice() {
  let listProductsElement = $(".content__body__products .card-body");
  for (let i = 0; i < listProductsElement.length; i++) {
    let prodcutCount = parseInt(
      $(listProductsElement[i]).find(".count").text()
    );
    let prodcutPriceText = $(listProductsElement[i]).find(".price").text();
    let productPrice = parseFloat(prodcutPriceText.replaceAll(",", ""));
    $(listProductsElement[i])
      .find(".priceTotal")
      .text((prodcutCount * productPrice).toLocaleString());
  }
  let pricesTotal = 0;
  let checkedElement = $(
    ".content__body__products input[type='checkbox']:checked"
  );
  let listProductsCheckedElement = $(checkedElement).closest(".card-body");
  console.log(listProductsCheckedElement);
  for (let i = 0; i < listProductsCheckedElement.length; i++) {
    pricesTotal += parseFloat(
      $(listProductsCheckedElement[i])
        .find(".priceTotal")
        .text()
        .replaceAll(",", "")
    );
  }
  $(".pricesTotal").text(pricesTotal.toLocaleString());
}

function checkPhoneNumber(phoneNumber) {
  var phonePattern = /^0[0-9]{9}$/;

  if (phonePattern.test(phoneNumber)) {
    return true;
  } else {
    return false;
  }
}

function checkMail(mail) {
  var emailPattern = /^\w+@\w+\.\w+$/;

  if (emailPattern.test(mail)) {
    return true;
  } else {
    return false;
  }
}
