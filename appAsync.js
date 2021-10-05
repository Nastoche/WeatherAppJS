const weatherByCity = async function weatherByChosenCity(city) {
  try {
    const apiKey = "495753d8e6ba3c307ed4f5f43525dcea";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    // console.log(response.ok);
    const data = await response.json();
    console.log(data);

    if (data.name === undefined) {
      document.getElementById("search").style.border = "1px solid red";
      return false;
    }
    document.getElementById("search").style.border = "2px solid green";
    document.querySelector("#city").innerHTML = `Ville : ${data.name}`;
    document.querySelector("#description").innerHTML =
      `Temps actuel : ` + data.weather[0].description;
    document.querySelector("#temp").innerHTML =
      `<i class="fas fa-thermometer-half" title="Température"></i>` +
      data.main.temp +
      " °c";
    document.querySelector("#wind").innerHTML =
      `<i class="fas fa-wind" title="Vitesse du vent"></i>` +
      data.wind.speed +
      " m/s";
    document.querySelector("#humidity").innerHTML =
      `<i class="fas fa-tint" title="Humidité"></i>` +
      data.main.humidity +
      " %";
    document.querySelector("#pressure").innerHTML =
      "Pression atmosphérique : " + data.main.pressure + " hPa";
  } catch (err) {
    console.log("Erreur : " + err);
    return false;
  }
};

document.querySelector("#input1").addEventListener("input", function () {
  let chosenCity = document.querySelector("#input1").value;
  if (chosenCity !== undefined) {
    weatherByCity(chosenCity);
  } else {
    return false;
  }
});

weatherByCity("Paris");

const deleteBtn = document.getElementById("delete-input");

deleteBtn.onclick = () => {
  document.getElementById("input1").value = "";
};
