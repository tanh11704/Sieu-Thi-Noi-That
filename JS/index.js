$(document).ready(function () {
  $(".addToCart").click(function (e) {
    e.preventDefault();

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    console.log(cartItems);

    const name = $(this).closest(".box").find("h5").text();
    const price = parseFloat(
      $(this).closest(".box").find("h6").text().replaceAll(",", "")
    );
    const image_url = "../" + $(this).closest(".box").find("img").attr("src");

    let product = {
      name,
      price,
      image_url,
    };

    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  });
});
