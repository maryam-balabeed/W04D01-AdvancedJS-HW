async function request(){

 const response= await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
 const json=await  response.json()
 console.log(json.items[0].volumeInfo.title)
 console.log(json.items[0].volumeInfo.description)
    // .then(res => res.json())
    // .then((result) => {
    //       items= result.items;
    //       console.log(items);
    //     }),
    // .then(function(response) {
    //     return response.json()
    //   })
    //   .then(function(json) {
    //     items=json.items;
    //           console.log(items);
    //   })
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
    //   (error) => {
    //    console.log(error);
    //   }
    // }

}
console.log(request())
// -----------------------------------------------------------
let time;

function tImer() {
  document.getElementById("timeout_text").innerHTML = "The timeout has been started";
  time=setTimeout(tiMee, 3000);
}
function tiMee(){
    document.getElementById("timeout_text").innerHTML = "The timeout has been triggered!";
    document.getElementById("timeout_text").style.color="green";
}
function cleare(){
    clearTimeout(time)
    document.getElementById("timeout_text").innerHTML = "The timeout has been cleared";
   
}