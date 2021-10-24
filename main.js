let timeout;
function triggering(elmnt) {
  if (elmnt.value != "The timeout has been triggered!") {
    elmnt.value = "The timeout has been started";
    timeout = setTimeout(() => {
      elmnt.value = "The timeout has been triggered!";
      elmnt.style = "color:green;";
    }, 3000);
  }
}

function clearing(elmnt) {
  clearTimeout(timeout);
  document.getElementById("trigger").value = "The timeout has been cleared";
  document.getElementById("trigger").style = "color:initial;";
}
