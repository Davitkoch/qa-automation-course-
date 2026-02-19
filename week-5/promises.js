function makeBurger() {
  return new Promise((resolve, reject) => {
    console.log("making burger");
    setTimeout(() => {
      const success = true;
      console.log("burger served");
      if (success) {
        resolve("burger served");
      } else {
        reject("pburger is burnt");
      }
    }, 5000);
  });
}

makeBurger().then((message) => {
  console.log("receiver:", message);
  console.log("enjoy you meal");
});
makeBurger().catch((error) => {
  console.log("receiver error", error);
});
makeBurger().finally(() => {
  console.log(" i always tun no mettar what");
});
//////////////////////////////////////
