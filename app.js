console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
  } else {
    continue;
  }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let x = 1; x <= 100; x++) {
  if (x % 3 == 0 && x % 5 == 0) {
    console.log("FIZZBUZZ");
  } else if (x % 3 == 0) {
    console.log("FIZZ");
  } else if (x % 5 == 0) {
    console.log("BUZZ");
  } else {
    console.log(x);
  }
}
