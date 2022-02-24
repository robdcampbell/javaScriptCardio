let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a === 2) {
    resolve("Success");
  }
  reject("Failed");
});

p.then((res) => console.log(res)).catch((err) => console.log(err));
