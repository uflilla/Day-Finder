let year = document.getElementById("year");
let month = document.getElementById("month");
let date = document.getElementById("date");
let result = document.getElementById("result");
let calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", () => {
  let dateString = `${year.value} ${month.value} ${date.value}`;
  console.log(dateString);
  let dateTime = new Date(dateString);
  let day = dateTime.getDay();
  switch (day) {
    case 0:
      result.innerText = "Sunday";
      break;
    case 1:
      result.innerText = "Monday";
      break;
    case 2:
      result.innerText = "Tuesday";
      break;
    case 3:
      result.innerText = "Wednesday";
      break;
    case 4:
      result.innerText = "Thursday";
      break;
    case 5:
      result.innerText = "Friday";
      break;
    case 6:
      result.innerText = "Saturday";
      break;
    default:
      break;
  }
});

// console.clear();
