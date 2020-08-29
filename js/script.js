const api = {
    key: '8310e1addbb6fcf905fc82269b4636c8',
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.search-box');

searchBox.addEventListener('keypress' , setQuery);

function setQuery(event) { 
    if(event.keyCode == 13){
        getResults(searchBox.value);
        console.log(searchBox.value);
    }
 }

 function getResults(query){
     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(weather => {
         return weather.json();
     }).then(displayResults);
 }

 function displayResults(weather) { 
     console.log(weather);
  }