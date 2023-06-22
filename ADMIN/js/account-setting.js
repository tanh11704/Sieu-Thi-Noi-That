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

var accounts = [
  {
    id: 1,
    username: "user1",
    fullname: "Người dùng 1",
    access: "User",
    phone: "123456789",
    email: "user1@example.com",
  },
  {
    id: 2,
    username: "user2",
    fullname: "Người dùng 2",
    access: "Admin",
    phone: "987654321",
    email: "user2@example.com",
  },
];

function renderAccounts() {
  var tableBody = document.querySelector("#account-table tbody");
  tableBody.innerHTML = "";

  accounts.forEach(function (account) {
    var row = document.createElement("tr");
    row.innerHTML = `
        <td>${account.id}</td>
        <td>${account.username}</td>
        <td>${account.fullname}</td>
        <td>${account.access}</td>
        <td>${account.phone}</td>
        <td>${account.email}</td>
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

renderAccounts();
