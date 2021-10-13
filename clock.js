let myName = prompt("Isminiz Nedir?");
let info = document.querySelector("#myName")

myName.length > 0 ?
document.getElementById('happy').removeAttribute('hidden'):
document.getElementById('sad').removeAttribute('hidden');

info.innerHTML = `${myName.length > 0 ? myName : "Isimsiz"}`

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("myClock").innerText = time;
  document.getElementById("myClock").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();
