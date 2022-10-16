export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const matrix = [];

numbers.map((x) => {
  const pair = numbers.map((y) => {
    return [x, y];
  });
  matrix.push(pair);
});

export default matrix;
