const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
const currentDay = document.querySelector('[data-testid="currentDay"]');

function updateTime() {
  const now = new Date();
  const utcTime = now.toISOString().split('T')[1].split('.')[0]; // Extracting only the time part
  const day = now.toLocaleDateString('en-US', { weekday: 'long' });

  currentTimeUTC.textContent = utcTime;
  currentDay.textContent = day;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to set the time immediately
