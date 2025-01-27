setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAnglelesDateElement = losAngelesElement.querySelector(".date");
  let losAnglelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAnglelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAnglelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

setInterval(function () {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);
