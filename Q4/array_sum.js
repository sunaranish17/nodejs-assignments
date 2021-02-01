let items = [7, 4, 8, 10, 1, 2, 2, 3, 4];

sum = items.reduce((a, b) => {
  return a + b;
});

console.log('The sum is: ', sum);