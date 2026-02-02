// let carBrand = ["BMW", "Mercedes", "Porsche", "VW", "Audi"];

// function brandchecker() {
//   if (carBrands.includes(carBrand.toLowerCase())) {
//     return "brand exists";
//   } else {
//     return "brand not founded";
//   }
// }
// console.log(brandCheck(carBrand, "BMW"));
//let result2 = carBrand.join(", ");

// function brandCheck(carBrand, brand1) {
//   if (carBrand.includes(brand1.toLowerCase())) {
//     return "brand exist";
//   }
//   return "brand not found";
// }
// console.log(brandCheck(carBrand, "BMW"));

function helloWOrld() {
  console.log("hello,kkkkk");
  return "hello,iiiiii";
}

helloWOrld();
let arr = ["Toyota", "BMW", "Audi", "Tesla", "Mercedes", "Jeep", "Ford"];

function uppercaseWithFor(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].toUpperCase());
  }
  return result;
}
