import getRandomWell from './getRandomWells';

describe('test getRandomWell functions', () => {
  it('If max is 1 then expect to get only 1 random well', () => {
    let result: any[] = getRandomWell(3, 3, 1);
    expect(result.length).toBe(1);
  });

  it('If max is 2 then expect to get 2 random and unique wells', () => {
    let result: any[] = getRandomWell(3, 3, 2);
    expect(result.length).toBe(2);
  });

  it('If max is 3 then expect to get 3 random and unique wells', () => {
    let result: any[] = getRandomWell(3, 3, 3);
    expect(result.length).toBe(3);
  });
});
