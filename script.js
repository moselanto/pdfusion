// Search toggle on mobile
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", () => {
  if (window.innerWidth <= 480) {
    searchInput.style.display = searchInput.style.display === "block" ? "none" : "block";
    if (searchInput.style.display === "block") searchInput.focus();
  }
});

// Create dropdown toggle
const createBtn = document.getElementById("createBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

createBtn.addEventListener("click", () => {
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", (e) => {
  if (!e.target.closest(".create-dropdown")) dropdownMenu.style.display = "none";
});

// Categories highlight
document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelector(".chip.active")?.classList.remove("active");
    chip.classList.add("active");
  });
});

// Categories scroll arrows
const categories = document.getElementById("categories");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

function updateArrows() {
  scrollLeftBtn.style.display = categories.scrollLeft <= 0 ? "none" : "flex";
  scrollRightBtn.style.display = (categories.scrollLeft + categories.clientWidth >= categories.scrollWidth - 1) ? "none" : "flex";
}

scrollLeftBtn.addEventListener("click", () => categories.scrollBy({ left: -200, behavior: "smooth" }));
scrollRightBtn.addEventListener("click", () => categories.scrollBy({ left: 200, behavior: "smooth" }));

categories.addEventListener("scroll", updateArrows);
window.addEventListener("resize", updateArrows);
updateArrows();

// Drawer toggle
const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");
const content = document.querySelector(".content");

menuBtn.addEventListener("click", () => {
  drawer.classList.toggle("active");
  content.classList.toggle("shifted");
});
