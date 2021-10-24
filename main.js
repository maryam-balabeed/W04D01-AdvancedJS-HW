async function fetcGoogleBooks(){
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699");
      const jsonRes = await response.json()
    console.log(jsonRes.items[0].volumeInfo.title, jsonRes.items[0].volumeInfo.description)
    return jsonRes
  
  };
  
  fetcGoogleBooks()

  /*######################*/