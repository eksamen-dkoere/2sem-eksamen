// DARK MODE
const html = document.querySelector("html");
const buttons = document.querySelectorAll(".darkmode-toggle");

// Check localStorage on page load
if (localStorage.getItem("darkMode") === "enabled") {
  html.classList.add("dark");
}

// Toggle function
function colorSchemeToggle() {
  html.classList.toggle("dark");

  // Save preference
  if (html.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", colorSchemeToggle);
});
