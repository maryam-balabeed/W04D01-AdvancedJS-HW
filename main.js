async function fetchBook() {
  try {
    const res = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699"
    );
    const result = await res.json();
    result.items.forEach(function(ele) {
      console.log(ele.volumeInfo.title);
      console.log(ele.volumeInfo.description);
    });
  } catch (e) {
    console.log(e);
  }
}

fetchBook();
