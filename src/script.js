function updateTime() {
  let newYork = document.querySelector("#new-york-city");
  if (newYork) {
    let newYorkDate = newYork.querySelector(".date");
    let newYorkTime = newYork.querySelector(".time");
    let nyTime = moment().tz("America/New_York");

    newYorkDate.innerHTML = nyTime.format("MMMM Do YYYY");
    newYorkTime.innerHTML = `${nyTime.format("h:mm:ss")} <small>${nyTime.format(
      "A"
    )}</small>`;
  }

  //San Diego
  let sanDiego = document.querySelector("#san-diego");
  if (sanDiego) {
    let sanDiegoDate = sanDiego.querySelector(".date");
    let sanDiegoTime = sanDiego.querySelector(".time");
    let sdTime = moment().tz("America/Los_Angeles");

    sanDiegoDate.innerHTML = sdTime.format("MMMM Do YYYY");
    sanDiegoTime.innerHTML = `${sdTime.format(
      "h:mm:ss"
    )} <small>${sdTime.format("A")}</small>`;
  }

  let singapore = document.querySelector("#singapore");
  if (singapore) {
    let singaporeDate = singapore.querySelector(".date");
    let singaporeTime = singapore.querySelector(".time");
    let singpTime = moment().tz("Asia/Singapore");

    singaporeDate.innerHTML = singpTime.format("MMMM Do YYYY");
    singaporeTime.innerHTML = `${singpTime.format(
      "h:mm:ss"
    )} <small>${singpTime.format("A")}</small>`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
     <h2>${cityName}</h2>
     <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="index.html">All Cities</a>
  `;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
