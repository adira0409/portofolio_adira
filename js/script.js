const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const year = document.getElementById("year");

// Menu navigasi HP
menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");

  const isOpen = navMenu.classList.contains("active");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Tutup menu setelah memilih bagian
document.querySelectorAll(".nav-menu a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Tahun otomatis di footer
year.textContent = new Date().getFullYear();
