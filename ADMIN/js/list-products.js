$(document).ready(function () {
  $(".more").siblings(".ribbon").hide();
  $(".more").click(function () {
    var ribbon = $(this).siblings(".ribbon");
    ribbon.toggle();
  });

  $(".edit-button, .delete-button").click(function () {
    var accountId = $(this).closest("tr").find("td:first-child").text();
    console.log("AccountId:", accountId);
  });
});

var products = [
  {
    id: 1,
    image: "./../img/Tu-quan-ao.jpg",
    name: "Tủ Áo Quần Hiện Đại",
    type: "phòng ngủ",
    costPrice: "1000000",
    sellPrice: "1500000",
  },
  {
    id: 2,
    image: "./../img/Tu-quan-ao.jpg",
    name: "Tủ Áo Quần Hiện Đại",
    type: "phòng ngủ",
    costPrice: "1000000",
    sellPrice: "1500000",
  },
];

function renderProducts() {
  var tableBody = document.querySelector("#account-table tbody");
  tableBody.innerHTML = "";

  products.forEach(function (account) {
    var row = document.createElement("tr");
    row.innerHTML = `
        <td>${account.id}</td>
        <td>
            <img class='products-image' style="max-width: 25px" src='${
              account.image
            }' alt=''>
        </td>
        <td>${account.name}</td>
        <td>${account.type}</td>
        <td>${Number(account.costPrice).toLocaleString("en")} VNĐ</td>
        <td>${Number(account.sellPrice).toLocaleString("en")} VNĐ</td>

        <td>
            <button class="btn shadow-none more"><i class="fa fa-ellipsis-h"></i></button>
            <div class="ribbon">
                <button class="edit-button">Sửa</button>
                <button class="delete-button">Xóa</button>
            </div>
        </td>
        `;
    tableBody.appendChild(row);
  });
}

renderProducts();
