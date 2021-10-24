// Abdulsalam Aldawsari - AdvancedJS-HW 2021/10/4

/*Task 1*/
async function fetchbooks() {
  try {
    let res = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699"
    );
    let data = await res.json();
    console.log("Title: ",       data.items[0].volumeInfo.title);
    console.log("Description: ", data.items[0].volumeInfo.description);
  } catch (err) {
    console.log(err);
  }
}
fetchbooks();

/*----------------------------------------------*/

/*Task 2*/

let started = document.getElementById("timeout_text");
let timeout;

function testTimeout() {
  started.innerHTML = "The timeout has been started";
  started.style.color = "black";
  timeout = setTimeout(timeTrigger, 3000);
}
function timeTrigger() {
 started.innerHTML = "The timeout has been triggred!";
 started.style.color = "green";

}
function clearTime() {
    started.innerHTML = "The timeout has been cleared";
    started.style.color = "black";
  clearTimeout(timeout);
}
