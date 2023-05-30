$(document).ready(function () {
  $(".version").click(function (e) {
    e.preventDefault();
    $(this).find('input[type="radio"]').prop("checked", true);
  });
});
