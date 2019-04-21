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

if(location.hash){
  fetch_print(location.hash.substr(2));
}else{
  fetch_print('welcome');
}
