// topic of message generator: Random Walmart Greeting!

const names = ["Jean-Luc LeClerc", "Oprah", "Burt Reynolds", "François Hardy"];
const numbers = [420, 55, 1, 3.5, 99, 69, 100, 2, 324, 1000];
const items = ["Impossible Burgers", "Flame-throwers"];

function selectRandom(arr) {
  const selection = Math.floor(Math.random() * arr.length);
  return arr[selection];
}

function createGreeting() {
  const customerName = selectRandom(names);
  const saleItem = selectRandom(items);
  const salePrice = selectRandom(numbers);

  return `Welcome to Walmart, ${customerName}, today's special is ${saleItem}, 38 of 'em for just $${salePrice}`;
}

console.log(createGreeting());
