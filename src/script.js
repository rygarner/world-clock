function updateNewYorkTime() {
  let newYork = document.querySelector("#new-york-city");
  let newYorkDate = newYork.querySelector(".date");
  let newYorkTime = newYork.querySelector(".time");
  let nyTime = moment().tz("America/New_York");

  newYorkDate.innerHTML = nyTime.format("MMMM Do YYYY");
  newYorkTime.innerHTML = `${nyTime.format("h:mm:ss")} <small>${nyTime.format(
    "A"
  )}</small>`;
}

setInterval(updateNewYorkTime, 1000);
