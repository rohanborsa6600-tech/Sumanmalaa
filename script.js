// 🔘 Floating control buttons auto-add (HTML न बदलता)
window.addEventListener("DOMContentLoaded", () => {
  const controls = document.createElement("div");
  controls.id = "floating-controls";
  controls.innerHTML = `
    <button id="toggleTheme">🌙</button>
    <button id="fontPlus">A+</button>
    <button id="fontMinus">A-</button>
  `;
  document.body.appendChild(controls);

  // 🌗 Theme toggle
  const themeBtn = document.getElementById("toggleTheme");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });

  // 🔠 Font size control
  let size = 18;
  const plus = document.getElementById("fontPlus");
  const minus = document.getElementById("fontMinus");

  plus.addEventListener("click", () => {
    size = Math.min(size + 2, 30);
    document.body.style.fontSize = size + "px";
  });

  minus.addEventListener("click", () => {
    size = Math.max(size - 2, 12);
    document.body.style.fontSize = size + "px";
  });
});
