
// function determineHouseholdPts(numberInHouseholdgit ) {
    if (numberInHousehold === 1) {
        carbonFootprintPoints = carbonFootprintPoints + 14;
      } else if (numberInHousehold === 2) {
        carbonFootprintPoints = carbonFootprintPoints + 12;
      } else if (numberInHousehold === 3) {
        carbonFootprintPoints = carbonFootprintPoints + 10;
      } else if (numberInHousehold === 4) {
        carbonFootprintPoints = carbonFootprintPoints + 8;
      } else if (numberInHousehold === 5) {
        carbonFootprintPoints = carbonFootprintPoints + 6;
      } else if (numberInHousehold === 6) {
        carbonFootprintPoints = carbonFootprintPoints + 4;
      } else if (numberInHousehold > 6) {
        carbonFootprintPoints = carbonFootprintPoints + 2;
      } else {
        console.log("no update to points");
      }
      
console.log(`Based on the number of members of the household of ${numberInHousehold} the output would be ${carbonFootprintPoints}.`
  );
/*}


function determineHouseSize(houseSize) {
switch(houseSize) {
    case "large house":
    houseSizePts = 10;
    break;

    case "medium-sized":
    houseSizePts = 7;
    break;

    case "small house":
    houseSizePts = 4;
    break;

    case "apartment":
    houseSizePts = 2;
    break;
}
console.log(`Based on the size of the house, a ${houseSize} will increase the carbon footprint by ${houseSizePts}.`
  );

console.log(`The updated carbonfootprint is ${houseSizePts + carbonFootprintPoints}`)  
}

*/

const numberInHousehold = 4;
let carbonFootprintPoints = 0;
//const houseSize = "apartment";
//let houseSizePts = 0;

//determineHouseholdPts(5); 
//determineHouseSize("small house");
