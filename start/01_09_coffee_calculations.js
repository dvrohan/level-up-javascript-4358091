// Write your code here
function calculateBill(coffeeArray) {
  let coffeeSum = coffeeArray.reduce(
    (totalCoffees, numCoffees) => (totalCoffees += numCoffees)
  )
  return `The total bill is $${coffeeSum * 1.25}`;
}

console.log(calculateBill([2, 5, 7, 1, 4]));