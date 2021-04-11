/*
 * Utility functions:
 * This is used to get random wells like '1,1', '0,0','2,3'.
 * The purpose of it is to dispatch FillWell actions to fill the generated Wells.
 * This is unit tested and passed.
 * */

const getRandomInt = (max: number): number => {
  if (max === 0) return 1;
  return Math.floor(Math.random() * max);
};
const getRandomWell = (horizontal: number, vertical: number, max: number) => {
  let result = new Set();
  while (result.size < max) {
    let horizontalRandom = getRandomInt(horizontal - 1);
    let verticalRandom = getRandomInt(vertical - 1);
    result.add(`${horizontalRandom},${verticalRandom}`);
  }
  return [...result];
};
export default getRandomWell;
