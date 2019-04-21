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
  });
}

var _hash = window.location.hash;
if(_hash){
  fetch_print(_hash.substr(2));
}else{
  fetch_print('welcome');
}
