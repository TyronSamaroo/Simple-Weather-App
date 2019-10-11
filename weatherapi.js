var APIKEY = "8b36818dc3570d9804222e00a13c6b34";

document.getElementById('search').addEventListener('click',function(){
    var zipcode = document.getElementById('zip').value;
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load",responseRecievedHandler);
    xhr.responseType = 'json';
    var queryString = `units=imperial&zip=${zipcode},us&appid=${APIKEY}`;
    xhr.open("GET","https://api.openweathermap.org/data/2.5/weather?" + queryString);
    xhr.send();
    }
);
console.log(queryString)
function responseRecievedHandler(){
    if(this.status === 200){
        var response = this.response;
        var html = '';
        var sun = response.sunrise;
        var date = new Date(sun * 1000);
        html += `<ul class="list-group">
        <li class="list-group-item">Location:  ${response.name}</li>
        <li class="list-group-item">Description:  ${response.weather[0].main}</li>
        <li class="list-group-item">More Details: ${response.weather[0].description}</li>
        <li class="list-group-item">Current Temperture is ${response.main.temp}</li>
        <li class="list-group-item">Current Humidity is ${response.main.humidity}%  </li>
        <li class="list-group-item">Min Temp:${response.main.temp_min}  Max Temp: ${response.main.temp_max}</li>
        </ul>`

        document.getElementById('forecast').innerHTML = html;
       // document.getElementById('forecast').innerHTML = "Data FOUND :)";
    }
    else{
        html = `<div id ="Error" class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">&#128552; ERROR ERROR &#128552;</h1>
          <p class="lead">YOU DID SOMETHING WRONG VERY WRONG..... :O</p>
        </div>
      </div>`
        document.getElementById('forecast').innerHTML = html;
        console.log(`zip=${zipcode},us&${APIKEY}`);
    }
    }