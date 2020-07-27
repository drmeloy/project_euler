// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
// How many such routes are there through a 20×20 grid?

const takeSteps = (limit, steps, x, y) => {
  if(x === limit && y === limit) return 1;
  if(x < limit && y < limit) return steps = takeSteps(limit, steps + 1, x + 1, y) + takeSteps(limit, steps + 1, x, y + 1);
  if(x === limit && y < limit) return steps = takeSteps(limit, steps + 1, x, y + 1);
  if(x < limit && y === limit) return steps = takeSteps(limit, steps + 1, x + 1, y);
}

const findSteps = gridWidth => {
  return takeSteps(gridWidth, 0, 0, 0)
};

console.time('start');
console.log('Width: 20',findSteps(20));
console.timeEnd('start');