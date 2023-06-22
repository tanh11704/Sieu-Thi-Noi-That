$(document).ready(function () {
  $(".choose-avatar").click(function () {
    $("#avatar-input").click();
  });

  $("#avatar-input").change(function () {
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var imageUrl = e.target.result;
        $(".avatar").css("background-image", "url(" + imageUrl + ")");
      };
      reader.readAsDataURL(this.files[0]);
    }
  });
});

var daySelect = document.querySelector("#day-select");
var monthSelect = document.querySelector("#month-select");
var yearSelect = document.querySelector("#year-select");

for (var i = 1; i <= 31; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  daySelect.appendChild(option);
}

for (var i = 1; i <= 12; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  monthSelect.appendChild(option);
}

var currentYear = new Date().getFullYear();
for (var i = currentYear; i >= 1950; i--) {
  var option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  yearSelect.appendChild(option);
}

function updateDays() {
  while (daySelect.firstChild) {
    daySelect.removeChild(daySelect.firstChild);
  }

  var selectedMonth = parseInt(monthSelect.value);
  var selectedYear = parseInt(yearSelect.value);
  var daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();

  for (var i = 1; i <= daysInMonth; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    daySelect.appendChild(option);
  }
}

monthSelect.addEventListener("change", updateDays);

yearSelect.addEventListener("change", updateDays);
