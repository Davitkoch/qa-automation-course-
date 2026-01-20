//1. && (and) sign - only if both conditions are true returns true

if (5 > 3 && 2 < 4) {
  console.log("hi,NYC");
}

if (5 < 3 && 2 < 4) {
  console.log("hi,NYC"); //doesnot print anything because it false
}

if (8 > 6 && 1) {
  console.log("hello muhamed");
}

//2. || (or) operator - retursn true if one of the conditions ais true

if (5 < 3 || 5 < 4) {
  console.log("hi,NYC"); //will print it because one of this conditions is true
}
