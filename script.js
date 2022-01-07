let ids = (id) => document.getElementById(id);
let classnames = (classes) => document.querySelector(classes);

const search = ids("search");
const submitBtn = ids("submit");
const form = ids("form");

submitBtn.addEventListener("click", (e) =>{
  
  getApi(search.value);
})

search.addEventListener("keypress", (e) => {
  if (e.key = "13"){
    getApi(search.value);
  }
})

let city = search.value;



async function getApi (city){
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3b3f2f6dfa38eedcde3d05c884c874a2`);
  
  var data = await response.json();
  if(response){
    hideloader();
  }
  show(data);
}

getApi(city);

function hideloader() {
  document.getElementById('loading').style.display = 'none';
}

function show(data){
  const {name} = data;
  const{icon,description} = data.weather[0];
  const {temp,feels_like} = data.main;

  // console.log(name,icon,description,temp,feels_like);

  classnames(".city").innerHTML = search.value;
  classnames(".temp").innerHTML = Math.floor(temp) + "<sup>0</sup><span>C</span>";
  classnames(".desc").innerHTML = description;
  classnames(".feels_like").innerHTML = "Feels like : " + Math.floor(feels_like) + "<sup>0</sup><span> C</span>" ;
  classnames("img").src = 'https://openweathermap.org/img/wn/'+ icon +'@2x.png'
}

