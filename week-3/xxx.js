// function budgetCheck(x, y) {
//   if (x < y) {
//     return "within budget";
//   }
//   if (y < x) {
//     return "over budget";
//   }
//   if (x !== "text" || Number.isNaN(x)) {
//     return "Invalid input";
//   }
//   if (y !== "text" || Number.isNaN(y)) {
//     return "Invalid input";
//   }
// }

// console.log(budgetCheck(5, "ccc"));

function carDealSummary(carBrand, carPrice, userBudget) {
  let cleanedBrand = carBrand.trim();
  if (carPrice !== "number" || Number.isNaN(carPrice) || carPrice < 0) {
    return "Invalid input";
  }
  let roundedPrice = Math.round(carPrice);
  if (userBudget !== "number" || Number.isNaN(userBudget) || userBudget < 0) {
    return "Invalid input";
  }
  const affordable =
    roundedPrice <= userBudget ? "within your budget" : "over your budget";

  return `${cleanedBrand} costs ${roundedPrice} and is ${affordable}.`;
}

function carDealSummary(carBrand, carPrice, userBudget) {
  const cleanedBrand = carBrand.trim().toLowerCase();

  if (typeof carPrice !== "number" || Number.isNaN(carPrice) || carPrice < 0) {
    return "Invalid input";
  }

  const roundedPrice = Math.round(carPrice);

  if (
    typeof userBudget !== "number" ||
    Number.isNaN(userBudget) ||
    userBudget < 0
  ) {
    return "Invalid input";
  }
  function affordability() {
    if (carPrice > userBudget) {
      return "not within you budget";
    }
    if (carPrice < userBudget) {
      return "within your budget";
    }
  }
  return `${cleanedBrand} costs ${roundedPrice} and is ${affordability}.`;
}
console.log(carDealSummary("carBran", 50, 100));
