export const numbers = [0, 1, 2, 3, 4, 5];
const matrix = [];

numbers.map((x) => {
  const pair = numbers.map((y) => {
    return [x, y];
  });
  matrix.push(pair);
});

export default matrix;
