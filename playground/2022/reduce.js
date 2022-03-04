console.log("test");

const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1,
  },
  {
    title: "Google Pixel",
    price: 499.99,
    amount: 2,
  },
  {
    title: "Apple iPhone",
    price: 899.99,
    amount: 8,
  },
  {
    title: "Apple Airpods",
    price: 99.99,
    amount: 9,
  },
];

let { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;
    // Count items
    total.totalItems += amount;
    // count sum:
    total.cartTotal += amount * price;
    return total;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);

console.log(totalItems);
console.log(parseFloat(cartTotal.toFixed(2)));
