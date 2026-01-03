const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

if (!toggleBtn) {
  console.error("theme-toggle button not found");
} else {
  // Load saved theme
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    root.classList.add("dark");
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }

  toggleBtn.addEventListener("click", () => {
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
  });
}

document.querySelectorAll(".project").forEach(project => {
  project.addEventListener("click", () => {
    project.classList.toggle("expanded");
  });
});