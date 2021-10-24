let timeout;
const timeoutText = document.getElementById("timeout_text");
const resetTime = () => {
    timeoutText.innerText = "The timeout has been started";
    timeoutText.style = "color: black;"
    timeout = setTimeout(() => {
        timeoutText.innerText = "The timeout has been triggered!";
        timeoutText.style = "color: green;"
    }, 3000);
}
const clearTime = () => {
    timeoutText.style = "color: black;"
    timeoutText.innerText = "The timeout has been cleared";
    if(timeout) clearTimeout(timeout);
}