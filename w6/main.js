const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const TBL = document.getElementById("tab-data");
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

function start(first, last, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseholdPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
cfpData.push({
  firstName: first,
  lastName: last,
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
    newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number in and size of home of ${obj.firstName} ${obj.lastName}`;
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${obj.houseM} (score: ${obj.houseMPTS}),`;  
    newP.textContent += ` and a ${obj.houseS} size of home (score: ${obj.houseSPTS}).`; 
    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newP); 
  }
}

function renderTblHeading() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"]
  headingTextArr.forEach(function(text){
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table
}

function renderTbl(data) {
const table =  renderTblHeading();
const tbody = document.createElement("tbody");
const tr = document.createElement("tr");
const trTextArr = ["Kar", 3, "large", 20];
trTextArr.forEach(function(text){
  const td = document.createElement("td");
  td.textContent = text;
  tr.appendChild(td);
})
const td = document.createElement("td");
const btnEdit = document.createElement("button");
const btnDel = document.createElement("button");
btnEdit.textContent = "Edit";
btnDel.textContent = "Del";

td.appendChild(btnEdit);
td.appendChild(btnDel);
tr.appendChild(td);
tbody.appendChild(tr);
table.appendChild(tbody);
console.log(table);

TBL.appendChild(table);
}

// My guess is the reason for the td error is because td was used
// as a textContent and maybe buttons require more to be declared?
// I did not realize I was working under the week 6 folder still. 
// I copied and pasted the information over to week 7


FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers= parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(firstName, lastName, houseMembers, houseSize);
  OUTPUT.innerHTML = "";
 // displayOutput();
  renderTbl(cfpData);
  FORM.reset();
})

