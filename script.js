const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  menuToggle.textContent = open ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) {
      menuToggle.textContent = "☰";
      menuToggle.setAttribute("aria-label", "Open navigation");
    }
  });
});

// Demo date: 19 September 2027, 4:00 PM in the visitor's local time.
const weddingDate = new Date(2027, 8, 19, 16, 0, 0);
function updateCountdown() {
  const remaining = Math.max(0, weddingDate.getTime() - Date.now());
  const values = {
    days: Math.floor(remaining / 86400000),
    hours: Math.floor((remaining % 86400000) / 3600000),
    minutes: Math.floor((remaining % 3600000) / 60000),
    seconds: Math.floor((remaining % 60000) / 1000)
  };
  Object.entries(values).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = id === "days" ? String(value).padStart(3, "0") : String(value).padStart(2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

document.getElementById("rsvpForm")?.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("guestName").value.trim();
  const choice = document.getElementById("attendance").value;
  const feedback = document.getElementById("formFeedback");
  feedback.textContent = choice === "joyfully-accept"
    ? `Thank you, ${name}! Your demo reply has been noted on this screen only.`
    : `Thank you for letting us know, ${name}. This is a demo form only.`;
});
