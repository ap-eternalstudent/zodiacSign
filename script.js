const btnCheck = document.querySelector("button");
const birthDateMenu = document.getElementById("dateMenu");
let dateInput = "";
let zodiacSign = "";

const birthDateArray = [
  "March 21 - April 19",
  "April 20 - May 20",
  "May 21 - June 20",
  "June 21 - July 22",
  "July 23 - August 22",
  "August 23 - September 22",
  "September 23 - October 22",
  "October 23 - November 21",
  "November 22 - December 21",
  "December 22 - January 19",
  "January 20 - February 18",
  "February 19 - March 20",
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
  switch (birthDateMenu.value) {
    case birthDateArray[0]:
      zodiacSign = "aries";
      break;
    case birthDateArray[1]:
      zodiacSign = "taurus";
      break;
    case birthDateArray[2]:
      zodiacSign = "gemini";
      break;
    case birthDateArray[3]:
      zodiacSign = "cancer";
      break;
    case birthDateArray[4]:
      zodiacSign = "leo";
      break;
    case birthDateArray[5]:
      zodiacSign = "virgo";
      break;
    case birthDateArray[6]:
      zodiacSign = "libra";
      break;
    case birthDateArray[7]:
      zodiacSign = "scorpio";
      break;
    case birthDateArray[8]:
      zodiacSign = "sagittarius";
      break;
    case birthDateArray[9]:
      zodiacSign = "capricorn";
      break;
    case birthDateArray[10]:
      zodiacSign = "aquarius";
      break;
    case birthDateArray[11]:
      zodiacSign = "pisces";
      break;
  }
  displayZodiacSign();
};

populateMenu();
btnCheck.addEventListener("click", dateRange);
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
