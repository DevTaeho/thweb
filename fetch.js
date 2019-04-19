function fetch_print(self){
  fetch(self).then(function(response){
    response.text().then(function(text){
      document.querySelector('article').innerHTML = text;
    })
  })
}
