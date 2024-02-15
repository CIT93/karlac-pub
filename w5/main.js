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
cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePTS, total]);
}

function displayOutput() {
  for (arr of cfpData) {
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${arr[4]}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number in and size of home`
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${arr[0]} (score: ${arr[3]}),`;  
    newP.textContent += ` and a ${arr[1]} size of home (score:${[2]}).` 
    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP);
  }
}

start(5, "apt");
start(4, "large");
start(3, "medium");
start(1, "apt");
start(7, "small");
start(7, "medium");
start(2, "apt");
start(1, "large");
start(6, "medium");

displayOutput()

