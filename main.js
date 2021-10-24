// Step 1: Rewriting the code above without using any arrow functions.
fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    .then(function(res){
  return res.json(); 
})
    .then(function(result){
          items= result.items;
          console.log(items);
        }),
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function(error){
       console.log(error);
      }


// Step 2: Rewrite the above code using an async/await function.
async function fetchBook(){
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699");
    const results = await response.json();
    return results;
  }
  fetchBook().then(results => {
    results;
    console.log(results);// fetched books
  });


  // Step 3: code to display (console log) only the title and description of the book returned.
async function fetchBook(){
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699");
    const results = await response.json();
    return results;
  }
  fetchBook().then(results => {
    results;
    const title = results.items[0].volumeInfo.title;
    const info = results.items[0].volumeInfo.description;
    
    console.log("title: " + title +'. \n \n' + "description: " + info);// fetched books
  });