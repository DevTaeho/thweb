function fetch_print(self){
  fetch(self).then(function(response){
    console.log(response);
    if(response.status == '404'){
      alert('Not found');
    }else{
      response.text().then(function(text){
        document.querySelector('article').innerHTML = text;
      })
    }  
  })
}
