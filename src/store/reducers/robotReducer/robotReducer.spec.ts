import {
  IRobotStatus,
  MoveAction,
  PlaceAction,
  RobotActionTypes,
  robotReducer,
} from './robotReducer';

describe('test robot reducer', () => {
  it('If dispatch a Init action with 5 * 5 units, it should set initial state with horizontal 5 units and 5 vertical units', () => {
    //Arrange
    let state: IRobotStatus = {
      currentHorizontalPosition: 0,
      currentVerticalPosition: 0,
      isPlaced: false,
    };

    //Act
    let action = (): PlaceAction => {
      return {
        type: RobotActionTypes.Place,
        payload: {
          currentHorizontalPosition: 5,
          currentVerticalPosition: 5,
        },
      };
    };

    //Assert
    expect(robotReducer(state, action())).toEqual({
      currentHorizontalPosition: 5,
      currentVerticalPosition: 5,
      isPlaced: true,
    });
  });

  it('If dispatched a North move action, Robot will move to the North direction by 1 Well', () => {
    //Arrange
    let state: IRobotStatus = {
      currentHorizontalPosition: 3,
      currentVerticalPosition: 3,
      isPlaced: false,
    };

    //Act
    let actionToNorth = (): MoveAction => {
      return {
        type: RobotActionTypes.Move,
        direction: 'N',
      };
    };

    //Assert
    expect(robotReducer(state, actionToNorth())).toEqual({
      currentHorizontalPosition: 4,
      currentVerticalPosition: 0,
      isPlaced: false,
    });
  });
  it('If dispatched a South move action, Robot will move to the South direction by 1 Well', () => {
    //Arrange
    let state: IRobotStatus = {
      currentHorizontalPosition: 3,
      currentVerticalPosition: 3,
      isPlaced: false,
    };

    //Act
    let actionToSouth = (): MoveAction => {
      return {
        type: RobotActionTypes.Move,
        direction: 'S',
      };
    };

    //Assert
    expect(robotReducer(state, actionToSouth())).toEqual({
      currentHorizontalPosition: 2,
      currentVerticalPosition: 3,
      isPlaced: false,
    });
  });
  it('If dispatched a West move action, Robot will move to the West direction by 1 Well', () => {
    //Arrange
    let state: IRobotStatus = {
      currentHorizontalPosition: 3,
      currentVerticalPosition: 3,
      isPlaced: false,
    };

    //Act
    let actionToWest = (): MoveAction => {
      return {
        type: RobotActionTypes.Move,
        direction: 'W',
      };
    };

    //Assert
    expect(robotReducer(state, actionToWest())).toEqual({
      currentHorizontalPosition: 3,
      currentVerticalPosition: 2,
      isPlaced: false,
    });
  });

  it('If dispatched a East move action, Robot will move to the East direction by 1 Well', () => {
    let state: IRobotStatus = {
      currentHorizontalPosition: 3,
      currentVerticalPosition: 3,
      isPlaced: false,
    };
    let actionToEast = (): MoveAction => {
      return {
        type: RobotActionTypes.Move,
        direction: 'E',
      };
    };
    expect(robotReducer(state, actionToEast())).toEqual({
      currentHorizontalPosition: 3,
      currentVerticalPosition: 4,
      isPlaced: false,
    });
  });
});
