import {
  FillTargetWellAction,
  InitWellAction,
  IWellContainerStatus,
  wellContainerReducer,
  WellContainerTypes,
} from './wellContainerReducer';

describe('test wellContainer Reducer', function () {
  it('If dispatched a InitWell of 2*2 action, the well container should return the correct well structure', () => {
    //Arrange the initial well status
    let state: IWellContainerStatus = {
      verticalUnits: 0,
      horizontalUnits: 0,
      allWellStatus: {
        '': 'EMPTY',
      },
    };

    //Act
    let action = (): InitWellAction => {
      return {
        type: WellContainerTypes.InitWell,
        payload: {verticalUnits: 2, horizontalUnits: 2},
      };
    };

    //Assert: expect the InitWell action will set the well status to the following
    expect(wellContainerReducer(state, action())).toEqual({
      verticalUnits: 2,
      horizontalUnits: 2,
      allWellStatus: {
        '0,0': 'EMPTY',
        '0,1': 'EMPTY',
        '1,0': 'EMPTY',
        '1,1': 'EMPTY',
      },
    });
  });

  it('If dispatched a InitWell of 3*3 action with some already filled wells, the well container should return the correct well structure', () => {
    //Arrange the initial status
    let state: IWellContainerStatus = {
      verticalUnits: 0,
      horizontalUnits: 0,
      allWellStatus: {
        '': 'EMPTY',
      },
    };

    //Act
    let action = (): InitWellAction => {
      return {
        type: WellContainerTypes.InitWell,
        payload: {verticalUnits: 3, horizontalUnits: 3},
        additionalInfo: {
          '1,1': 'FULL',
          '2,2': 'FULL',
        },
      };
    };

    //Assert: expect the init well action will return the following well status
    expect(wellContainerReducer(state, action())).toEqual({
      verticalUnits: 3,
      horizontalUnits: 3,
      allWellStatus: {
        '0,0': 'EMPTY',
        '0,1': 'EMPTY',
        '0,2': 'EMPTY',
        '1,0': 'EMPTY',
        '1,1': 'FULL',
        '1,2': 'EMPTY',
        '2,0': 'EMPTY',
        '2,1': 'EMPTY',
        '2,2': 'FULL',
      },
    });
  });

  it('If dispatched a FillWell action to fill "1,1" well, the target empty well should be filled', () => {
    //Arrange the initial status
    let state: IWellContainerStatus = {
      verticalUnits: 0,
      horizontalUnits: 0,
      allWellStatus: {},
    };

    //Act: dispatch an init action with 2*2 and a fill action to fill '1,1' well
    let InitAction = (): InitWellAction => {
      return {
        type: WellContainerTypes.InitWell,
        payload: {verticalUnits: 2, horizontalUnits: 2},
      };
    };

    state = wellContainerReducer(state, InitAction());

    let FillAction = (): FillTargetWellAction => {
      return {
        type: WellContainerTypes.FillWell,
        targetWell: '1,1',
      };
    };

    //Assert: expect the well return the following status
    expect(wellContainerReducer(state, FillAction())).toEqual({
      verticalUnits: 2,
      horizontalUnits: 2,
      allWellStatus: {
        '0,0': 'EMPTY',
        '0,1': 'EMPTY',
        '1,0': 'EMPTY',
        '1,1': 'FULL',
      },
    });
  });
});
