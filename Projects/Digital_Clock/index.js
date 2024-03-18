const clock = document.getElementById("clock");

setInterval(function () {
  const time = new Date();
  let hours = time.getHours();

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  }
  const formattedHours = hours < 10 ? "0" + hours : hours; // Corrected condition for leading zero
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const timeString =
    formattedHours +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) + // Corrected condition for leading zero
    ":" +
    (seconds < 10 ? "0" + seconds : seconds); // Corrected condition for leading zero
  clock.innerHTML = timeString;
}, 1000);
