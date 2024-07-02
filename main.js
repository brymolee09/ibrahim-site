// Update UTC time and current day
function updateDateTime() {
  const now = new Date();
  document.getElementById('utc-time').textContent = now.toISOString().split('T')[1].slice(0, 8);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  document.getElementById('current-day').textContent = days[now.getUTCDay()];
}

updateDateTime();
setInterval(updateDateTime, 1000); // Update every second
