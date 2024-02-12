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
  for (arr of cfpData){
    console.log(arr)
    const output = document.getElementById("output");
    const newP = document.createElement("p");
    newP.textContent = `The Carbon Footprint is ${arr[4]} based on a score of ${arr[2]} for a household size of ${arr[0]} members and a score of ${arr[3]} for the ${arr[1]} home`;  
    output.appendChild(newP)
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

