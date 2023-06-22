$(document).ready(function () {
  $(".sidebar-toggle").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("rotated");
    $(".sidebar").toggleClass("hidden");
    $(".sidebar-toggle").removeClass("visible");
  });

  $(".show-cat-btn").click(function (e) {
    e.preventDefault();
    $(this).next().toggleClass("visible");
    $(this).find(".category__btn").toggleClass("rotated");
  });
});

// ĐỒ THỊ
var ctx = document.getElementById("myChart");

if (ctx) {
  var myCanvas = ctx.getContext("2d");
  var myChart = new Chart(myCanvas, {
    type: "line",
    data: {
      labels: [
        "Tháng 12",
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
      ],
      datasets: [
        {
          label: "Lưu lượng truy cập",
          data: [3500, 2700, 4000, 1500, 3000, 2500, 4500],
          cubicInterpolationMode: "monotone",
          tension: 0.4,
          backgroundColor: "rgba(95, 46, 234, 0.2)",
          borderColor: "rgba(95, 46, 234, 1)",
          borderWidth: 5,
        },
      ],
    },
    options: {
      scales: {
        y: {
          min: 0,
          max: 10000,
          ticks: {
            stepSize: 2000,
          },
          grid: {
            display: true,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      elements: {
        point: {
          radius: 2,
        },
      },
      plugins: {
        legend: {
          position: "top",
          align: "center",
          labels: {
            boxWidth: 8,
            boxHeight: 8,
            usePointStyle: true,
            font: {
              size: 12,
              weight: "500",
            },
          },
        },
        title: {
          display: true,
          text: "Lưu Lượng Truy Cập (Tháng 12 - Tháng 6)",
          align: "start",
          color: "#171717",
          font: {
            size: 16,
            family: "Inter",
            weight: "600",
            lineHeight: 1.4,
          },
        },
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
    },
  });
}
