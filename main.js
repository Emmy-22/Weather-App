document.getElementById("search-btn").addEventListener("click", () => {
  let city = document.getElementById("city").value;
  getWeather(city);
})

async function getWeather(city) {
  document.getElementById("city").value = "";
  try {
    let appid = "c3b5631fdf7c7865fe99512a08989524";
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`);
    if(!response.ok){
      throw new Error("City not found");
    }
      let data = await response.json();
document.getElementById("result").innerHTML = `
<h2>${data.name}, ${data.sys.country}</h2>
<p>Temperature: ${data.main.temp} °C</p>
<p>Weather: ${data.weather[0].description}</p>
<p>Wind Speed: ${data.wind.speed} m/s</p>
`;
  }
  catch(error) {
    document.getElementById("result").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // change button icon
  const btn = document.getElementById("toggle-theme");
  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
});




