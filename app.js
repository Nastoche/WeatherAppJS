const apiKey = "495753d8e6ba3c307ed4f5f43525dcea";

let apiCall = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&units=metric&appid=${apiKey}`;

  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        if (data.name === undefined) {
          return false;
        }
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
      })
    )
    .catch((err) => console.log("Erreur : " + err));
};

document.querySelector("#input1").addEventListener("input", function (e) {
  e.preventDefault();
  let ville = document.querySelector("#input1").value;
  if (ville !== undefined) {
    apiCall(ville);
  } else {
    return false;
  }
});

apiCall("Paris");
