// Update this date/time to your actual wedding date and local timezone.
const WEDDING_DATE = new Date("2027-09-19T15:30:00+04:00");
const countdownEls = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds")
};
function updateCountdown() {
  const difference = WEDDING_DATE.getTime() - Date.now();
  if (difference <= 0) {
    Object.values(countdownEls).forEach((el, i) => el.textContent = i === 0 ? "000" : "00");
    return;
  }
  const total = Math.floor(difference / 1000);
  countdownEls.days.textContent = String(Math.floor(total / 86400)).padStart(3, "0");
  countdownEls.hours.textContent = String(Math.floor((total % 86400) / 3600)).padStart(2, "0");
  countdownEls.minutes.textContent = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  countdownEls.seconds.textContent = String(total % 60).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
menuToggle.addEventListener("click", () => {
  const open = navigation.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  menuToggle.textContent = open ? "×" : "☰";
});
navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navigation.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

// Demo only: validates the RSVP but does not send or store data.
document.getElementById("rsvp-form").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("guest-name").value.trim();
  const attendance = document.getElementById("attendance").value;
  const message = document.getElementById("form-message");
  if (!name || !attendance) {
    message.textContent = "Please complete your name and attendance response.";
    return;
  }
  message.textContent = attendance === "accept"
    ? `Thank you, ${name} — your demo RSVP looks lovely! Connect a form service to receive real responses.`
    : `Thank you for letting us know, ${name}. Connect a form service to receive real responses.`;
  event.target.reset();
});
