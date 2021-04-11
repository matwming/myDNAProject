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
