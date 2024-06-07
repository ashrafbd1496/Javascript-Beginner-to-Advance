//http://api.weatherapi.com/v1/current.json?key=ef02df5dfad0491faef45257240606&q=Chittagong&aqi=yes
const tempField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const countryField = document.querySelector(".time_location h6");
const dateField = document.querySelector(".time_location span");
const weatherCondition = document.querySelector(".condition p");
const searchField = document.querySelector(".seach-area");
const form = document.querySelector("form");

let target = "Chittagong";

const SearchForLocation = (e) => {
  e.preventDefault();
  target = searchField.value;
  fetchWeather(target);
};

form.addEventListener("submit", SearchForLocation);

const fetchWeather = async (targetLocation) => {
  let url = `http://api.weatherapi.com/v1/current.json?key=ef02df5dfad0491faef45257240606&q=${targetLocation}&aqi=no`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`API request failed with status: ${res.status}`);
    }
    const data = await res.json();

    console.log(data);

    let locationName = data.location.name;
    let countryName = data.location.country;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;

    updateDetails(temp, locationName,countryName, time, condition);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
function updateDetails(temp, locationName, countryName, time, condition) {
  tempField.innerText = temp;
  locationField.innerText = locationName;
  countryField.innerText = countryName;
  dateField.innerText = time;
  weatherCondition.innerText = condition;
}

//console.dir(SearchForLocation);
