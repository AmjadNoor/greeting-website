function Greets() {
  let userTime = new Date().toLocaleTimeString();
  let firstHour = new Date().setHours(5);
  let secondHour = new Date().setHours(12);
  let thirdHour = new Date().setHours(17);

  if ((userTime => firstHour) && (userTime < secondHour)) {
    alert("Good morning 🌄");
  } else if ((userTime => secondHour) && (userTime < thirdHour)) {
    alert("Good Afternoon");
  } else if ((userTime => thirdHour)  (userTime < firstHour)) {
    alert("Good Evening 🌃");
  } else {
    alert("Sorry 😐 for the technical issue.");
  }
}

export default Greets;
