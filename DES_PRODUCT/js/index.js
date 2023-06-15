let imageMain = $("#imgurl img");
let imagesUrl = $("#listImages img");
imagesUrl = $.map(imagesUrl, function (element) {
  return $(element).attr("src");
});

$(document).ready(function () {
  $(".version").click(function (e) {
    e.preventDefault();
    $(this).find('input[type="radio"]').prop("checked", true);
  });
  $("#addCart").click(function (e) {
    e.preventDefault();
    let name = $.trim(
      $(this).closest(".choose__product").siblings(".product__title").text()
    );
    let price = parseFloat(
      $(this)
        .closest(".choose__product")
        .find("#product-price")
        .text()
        .replaceAll(",", "")
    );
    let image_url =
      "." + $(this).closest(".choose__product").find("#imgurl img").attr("src");

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    let product = {
      name,
      price,
      image_url,
    };

    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Thêm vào giỏ hàng thành công!");
  });
});

function setImage(imgComponent, index) {
  imgComponent.fadeOut(400, () => {
    imgComponent.attr("src", imagesUrl[index]).fadeIn(400);
  });
}
