"use strict"
window.onload = function() {
  alert("Work-in-progress! Location look-up to be added later...");
  var station = prompt("Enter 7-digit Station Number: ");
  if (station === null) {
      alert("No data! Click 'OK' to reload..."); //break out of the function early
      window.location.reload();
    } else if (station.toString().length < 7) {
      alert("Invalid number, press 'OK' to reload page.");
      window.location.reload();
    } else if (station.toString().length > 7) {
      alert("Invalid number, press 'OK' to reload page.");
      window.location.reload();
    }
  var number = station;
  document.getElementById('station').innerHTML = number;
};
