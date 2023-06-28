

const submitBt = document.getElementById('submitBtn');
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");

const getInfo= async (event)=>{
    event.preventDefault();
    alert("hiii")
    let cityVal = cityName.value;


    if (cityVal==="") {
         city_name.innerText = "Please write the name before search";
       
    }
    else{
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=cd07f35ee6a8da555f2f33c28a597107`;
    const response = await fetch(url);
    console.log(response);
    } catch (error) {
        city_name.innerText = "Please write the city name correctly";
    }
    }
}

submitBt.addEventListener('click', getInfo);