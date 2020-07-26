// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
// How many such routes are there through a 20×20 grid?

const generateMatrix = num => new Array(num).fill(new Array(num).fill(0));

const stepRight = array => array.push('R');
const stepDown = array => array.push('D');

const takeSteps = (limit, x, y) => {
  if(x === limit && y === limit) return 2;
  if(x < limit) return 1 + takeSteps(limit, x + 1, y);
  if(y < limit) return 1 + takeSteps(limit, x, y + 1);
}

const findSteps = gridWidth => {
  return takeSteps(gridWidth, 0, 0, 0)
};

console.log(findSteps(20));
