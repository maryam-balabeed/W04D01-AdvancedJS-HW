async function myFetch() {
  try {
    let res = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699"
    );

    let data = await res.json();
    console.log("Title :" + data.items[0].volumeInfo.title);
    console.log("Discription : " + data.items[0].volumeInfo.description);
  } catch (eror) {
    console.log(eror);
  }
}

myFetch();
