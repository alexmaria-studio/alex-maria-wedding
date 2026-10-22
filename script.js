const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    menuButton.textContent = isOpen ? '×' : '☰';
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      menuButton.textContent = '☰';
    });
  });
}

// Sample event date: 19 September 2027 at 16:00 local browser time.
const weddingDate = new Date(2027, 8, 19, 16, 0, 0);
function updateCountdown() {
  const difference = Math.max(0, weddingDate.getTime() - Date.now());
  const parts = {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference % 86400000) / 3600000),
    minutes: Math.floor((difference % 3600000) / 60000),
    seconds: Math.floor((difference % 60000) / 1000)
  };
  Object.entries(parts).forEach(([id, value]) => {
    const node = document.getElementById(id);
    if (node) node.textContent = id === 'days' ? String(value).padStart(3, '0') : String(value).padStart(2, '0');
  });
}
updateCountdown();
window.setInterval(updateCountdown, 1000);

const rsvpForm = document.getElementById('rsvp-form');
if (rsvpForm) {
  rsvpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const attendance = document.getElementById('attendance').value;
    const result = document.getElementById('form-result');
    result.textContent = attendance === 'accept'
      ? `Thank you, ${name}. Your demo reply is displayed here only.`
      : `Thank you for letting us know, ${name}. This demo form does not send replies.`;
  });
}
