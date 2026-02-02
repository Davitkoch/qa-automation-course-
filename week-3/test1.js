let arr = ["Toyota", "BMW", "Audi", "Tesla", "Mercedes", "Jeep", "Ford"];

function uppercaseWithFor(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].toUpperCase());
  }
  return result;
}
