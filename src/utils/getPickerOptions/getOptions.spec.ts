import getPickerOptions from './getOptions';

describe('test getPickerOptions function', () => {
  it('If unit is 1, then expect to get an array with only 1 object', () => {
    //Arrange
    let unit = 1;

    //Action
    let result = getPickerOptions(unit);

    //Assert
    expect(result).toEqual([
      {
        label: '0',
        value: '0',
      },
    ]);
  });

  it('If unit is 2, then expect to get an array with 2 object', () => {
    //Arrange
    let unit = 2;

    //Action
    let result = getPickerOptions(unit);

    //Assert
    expect(result).toEqual([
      {
        label: '0',
        value: '0',
      },
      {
        label: '1',
        value: '1',
      },
    ]);
  });

  it('If unit is not a number, then still expect to get an array with 1 object', () => {
    //Arrange
    let unit = NaN;

    //Action
    let result = getPickerOptions(unit);

    //Assert
    expect(result).toEqual([
      {
        label: '0',
        value: '0',
      },
    ]);
  });
});
