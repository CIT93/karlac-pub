const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
 if(size === "large") {
  houseSizePoints = 10;
 } else if(size === "medium") {
  houseSizePoints = 7;
 } else if(size === "small") {
  houseSizePoints = 4;
 } else if(size === "apt") {
  houseSizePoints = 2;
 };
 return houseSizePoints;
}

function determineHouseholdPts(numberInHousehold) {
  let householdPoints = 0;
  if (numberInHousehold === 1) {
      householdPoints = 14;
    } else if (numberInHousehold === 2) {
      householdPoints = 12;
    } else if (numberInHousehold === 3) {
      householdPoints = 10;
    } else if (numberInHousehold === 4) {
      householdPoints = 8;
    } else if (numberInHousehold === 5) {
      householdPoints = 6;
    } else if (numberInHousehold === 6) { 
      householdPoints = 4;
    } else if (numberInHousehold > 6) {
      householdPoints = 2;
    }
  return householdPoints
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseholdPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
cfpData.push({
  houseM: houseHoldMembers,
  houseS: houseSize,
  houseMPTS: houseHoldPTS,
  houseSPTS: houseSizePTS,
  cfpTotal: total
});
}

function displayOutput() {

  for (obj of cfpData) {
    const newH2 = document.createElement("h2");
    newH2.textContent = `Cardon Footprint ${obj.cfpTotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number in and size of home`
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${obj.houseM} (score: ${obj.houseMPTS}),`;  
    newP.textContent += ` and a ${obj.houseS} size of home (score: ${obj.houseSPTS}).`; 
    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newP); 
  }
}

FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers= parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(houseMembers, houseSize);
  OUTPUT.innerHTML = "";
  displayOutput();
  FORM.reset();
})


// The apartment score is not correct. It is because we used 'apt' in the main.js but 'Apartment' in the index file. 

// It's easier to limit the end-user's choice of responses to make sure that the information that they provide fits in with the code. 
// Trying to code around all the errors and options that a user might include can make the program long and have more room for errors.