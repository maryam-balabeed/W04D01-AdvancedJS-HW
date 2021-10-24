let out;

function changeColor() {
  const Text = document.getElementById("timeout_text");

  document.getElementById("timeout_text").style.color = "black";
  Text.innerHTML = `<h3>The timeout has been started</h3> `;

  out = setTimeout(Alert, 3000);
}

function Alert() {
  document.getElementById(
    "timeout_text"
  ).innerHTML = `<h3>The timeout has been triggered !</h3>`;

  document.getElementById("timeout_text").style.color = "green";
}

function Clear() {
  document.getElementById(
    "timeout_text"
  ).innerHTML = `<h3> he timeout has been cleared</h3>`;
  document.getElementById("timeout_text").style.color = "black";

  clearTimeout(out);
}
