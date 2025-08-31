// Wrap everything in DOMContentLoaded so we know the DOM is fully available.
document.addEventListener('DOMContentLoaded', function () {
  // --- 1) The existing chart code ---
  var ctx = document.getElementById("myChart");

  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      datasets: [
        {
          data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
          lineTension: 0,
          backgroundColor: "transparent",
          borderColor: "#007bff",
          borderWidth: 4,
          pointBackgroundColor: "#007bff",
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });

  // --- 2) Single-page navigation logic ---
  // Select all sidebar links that have data-target="someSectionId"
  const sidebarLinks = document.querySelectorAll('.list-group-item[data-target]');

  // For each link, add a click handler
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default link jump

      // 1) Remove 'active' from all links
      sidebarLinks.forEach(l => l.classList.remove('active'));

      // 2) Add 'active' to the clicked link
      this.classList.add('active');

      // 3) Hide all sections in your <main> container
      const allSections = document.querySelectorAll('main section');
      allSections.forEach(section => {
        section.style.display = 'none';
      });

      // 4) Show only the chosen section
      const sectionId = this.getAttribute('data-target');
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.style.display = 'block';
      }
    });
  });
});