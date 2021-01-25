const btnCheck = document.querySelector("button");
const birthDateMenu = document.getElementById("dateMenu");
let dateInput = "";
let zodiacSign = "";

const displayZodiacSign = function () {
  let paragraph = document.createElement("p");
  let node = document.createTextNode(
    `Congratulations! Your zodiac sign is ${zodiacSign}`
  );
  paragraph.appendChild(node);
  let webPageBody = document.querySelector("body");
  webPageBody.appendChild(paragraph);
};

const dateRange = function () {
  dateRangeValue = birthDateMenu.value;
  switch (dateRangeValue) {
    case "march":
      zodiacSign = "aries";
      break;
    case "april":
      zodiacSign = "taurus";
      break;
    case "may":
      zodiacSign = "gemini";
      break;
    case "june":
      zodiacSign = "cancer";
      break;
    case "july":
      zodiacSign = "leo";
      break;
    case "august":
      zodiacSign = "virgo";
      break;
    case "september":
      zodiacSign = "libra";
      break;
    case "october":
      zodiacSign = "scorpio";
      break;
    case "november":
      zodiacSign = "sagittarius";
      break;
    case "december":
      zodiacSign = "capricorn";
      break;
    case "january":
      zodiacSign = "aquarius";
      break;
    case "february":
      zodiacSign = "pisces";
      break;
  }
  displayZodiacSign();
};

btnCheck.addEventListener("click", dateRange);
const birthDateArray = [
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
  "january",
  "february",
];

const populateMenu = function () {
  for (let i = 0; i < birthDateArray.length; i++) {
    let dateOption = birthDateArray[i];
    let birthDate = document.createElement("option");
    birthDate.textContent = dateOption;
    birthDate.value = dateOption;
    birthDateMenu.appendChild(birthDate);
  }
};
populateMenu();

// if else

// object

// Aries ♈️: March 21 - April 19
// Taurus ♉️: April 20 - May 20
// Gemini ♊️: May 21 - June 20
// Cancer ♋️: June 21 - July 22
// Leo ♌️: July 23 - August 22
// Virgo ♍️: August 23 - September 22
// Libra ♎️: September 23 - October 22
// Scorpio ♏️: October 23 - November 21
// Sagittarius ♐️: November 22 - December 21
// Capricorn ♑️: December 22 - January 19
// Aquarius ♒️: January 20 - February 18
// Pisces ♓️: February 19 - March 20
