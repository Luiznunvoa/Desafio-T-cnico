var n = Array.from({ length: 5 }, () => Math.floor(Math.random() * 20));
console.log(n);

for (let i = 0; i < 5; i++) {
  switch (true) {
    case (n[i] % 15) === 0:
      console.log("fizzbuzz");
      break;
    case (n[i] % 3) === 0:
      console.log("fizz");
      break;
    case (n[i] % 5) === 0:
      console.log("buzz");
      break;
    default:
      console.log(n[i]);
  }
}