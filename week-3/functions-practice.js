let carBrand = ["BMW", "Mercedes", "Porsche", "VW", "Audi"];
let numbers = [10, 20, 30, 40, 50];
let extraSpaceString = "   I like NEW cars";
let decimalNumber = 2.25;

// Task 1: Clean & Format Text

function cleanAndFormatText(extraSpaceString) {
  return extraSpaceString.trim().toLowerCase();
}
let result = cleanAndFormatText(extraSpaceString);
console.log(result);

// Task 2: First & Last Character

function firstAndLastCharacter(extraSpaceString) {
  let noExtraSpace = cleanAndFormatText(extraSpaceString);

  return {
    firstCharacter: noExtraSpace.at(0),
    lastCharacter: noExtraSpace.at(-1),
  };
}

let result1 = firstAndLastCharacter(extraSpaceString);
console.log(result1);

//Task 3: Word Counter

function wordCounter(extraSpaceString) {
  return extraSpaceString.trim().split(" ").length;
}

console.log(wordCounter(extraSpaceString));

// PART 2: ARRAY + FUNCTIONS

// Task 4: Brand Checker ////////////////////////////////////////////////////////////////
//let carBrand = ["BMW", "Mercedes", "Porsche", "VW", "Audi"];
let result2 = carBrand.join(", ");
function brandCheck(result2, brand1) {
  if (result2.toLowerCase().includes(brand1.toLowerCase())) {
    return "brand exist";
  }
  return "brand not found";
}
console.log(brandCheck(result2, "Porsche"));

//Task 5: Get Last Brand

function getLastBrand(carBrand) {
  return carBrand.at(-1);
}
console.log(getLastBrand(carBrand));

//Task 6: Format Brands List

function formatBrandsList(carBrands) {
  return carBrands.join(", ");
}

console.log(formatBrandsList(carBrand));

// PART 3: NUMBER + FUNCTIONS

//Task 7: Safe Rounding
let value = 6.4;
function safeRounding(value) {
  if (value === "number" || Number.isNaN(value)) {
    return "Invalid number";
  }

  return Math.round(value);
}

console.log(safeRounding(value));

//Task 8: Price Comparison

function comparison(X, Y) {
  if (X === Y) {
    return "Prices are equal";
  }

  if (X > Y) {
    return "First is higher";
  }

  return "Second is higher";
}

console.log(comparison(10, 20));

//Task 9: Random Whole Number

function randomWholeNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
console.log(randomWholeNumber());

// PART 4: CONDITIONAL THINKING

//ask 10: Budget Check

function budgetCheck(x, y) {
  if (x < y) {
    return "within budget";
  }
  if (y < x) {
    return "over budget";
  }
  if (x !== "text" || Number.isNaN(x) || x > 0) {
    return "Invalid input";
  }
  if (y !== "text" || Number.isNaN(y) || y > 0) {
    return "Invalid input";
  }
}

console.log(budgetCheck(5, "ccc"));

//  FINAL MINI-CHALLENGE

//Task 11: Simple Car Deal Summary

function carDealSummary(carBrand, carPrice, userBudget) {
  const cleanedBrand = carBrand.trim().toLowerCase();

  if (carPrice !== "number" || Number.isNaN(carPrice) || carPrice < 0) {
    return "Invalid input";
  }

  const roundedPrice = Math.round(carPrice);

  if (userBudget !== "number" || Number.isNaN(userBudget) || userBudget < 0) {
    return "Invalid input";
  }
  function affordability() {
    if (roundedPrice > userBudget) {
      return "not within you budget";
    }
    if (roundedPrice <= userBudget) {
      return "within your budget";
    }
  }
  return `${cleanedBrand} costs ${roundedPrice} and is ${affordability()}.`;
}
console.log(carDealSummary("carBran", 50, 100));
