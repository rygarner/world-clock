function updateTime() {
  let newYork = document.querySelector("#new-york-city");
  let newYorkDate = newYork.querySelector(".date");
  let newYorkTime = newYork.querySelector(".time");
  let nyTime = moment().tz("America/New_York");

  newYorkDate.innerHTML = nyTime.format("MMMM Do YYYY");
  newYorkTime.innerHTML = `${nyTime.format("h:mm:ss")} <small>${nyTime.format(
    "A"
  )}</small>`;

  //San Diego
  let sanDiego = document.querySelector("#san-diego");
  let sanDiegoDate = sanDiego.querySelector(".date");
  let sanDiegoTime = sanDiego.querySelector(".time");
  let sdTime = moment().tz("America/Los_Angeles");

  sanDiegoDate.innerHTML = sdTime.format("MMMM Do YYYY");
  sanDiegoTime.innerHTML = `${sdTime.format("h:mm:ss")} <small>${sdTime.format(
    "A"
  )}</small>`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
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
  `;
}

setInterval(updateTime, 1000);

let cittiesSelect = document.querySelector("#city");

cittiesSelect.addEventListener("change", updateCity);
