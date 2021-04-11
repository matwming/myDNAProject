/*
 * This the reducer file for well container. It includes interfaces, types, actions and a reducer function.
 * */

/*
Start of type definition: interfaces/types
* */
export interface IWellContainerStatus {
  verticalUnits: number;
  horizontalUnits: number;
  allWellStatus: {
    [index: string]: wellTypes;
  };
}

export interface InitWellAction {
  readonly type: WellContainerTypes.InitWell;
  payload: InitWell;
  additionalInfo?: {
    [index: string]: string;
  };
}

export interface FillTargetWellAction {
  readonly type: WellContainerTypes.FillWell;
  targetWell: string;
}

export type wellTypes = 'FULL' | 'EMPTY' | 'ERR';

export type WellContainerActions = InitWellAction | FillTargetWellAction;

export interface InitWell {
  verticalUnits: number;
  horizontalUnits: number;
}

export enum WellContainerTypes {
  InitWell = 'InitWell',
  FillWell = 'FillWell',
}
/*
End of types definition
* */

const WellContainerStatus: IWellContainerStatus = {
  verticalUnits: 5,
  horizontalUnits: 5,
  allWellStatus: {
    '0,0': 'EMPTY',
  },
};

/*
 * This is an GetWellInitialStatus action. It is used to set the initial status of the Well container.
 * like how many horizontal/vertical units the Well container should have and which Wells are filled.
 * */

export const GetWellInitialStatus = (
  payload: InitWell,
  additionalInfo?: {
    [index: string]: string;
  },
): InitWellAction => {
  return {
    type: WellContainerTypes.InitWell,
    payload,
    additionalInfo,
  };
};

/*
This is a FillTargetWell action.
It is used to Fill the target Well to change the status from EMPTY to FULL.
* */
export const FillTargetWell = (targetWell: string): FillTargetWellAction => {
  return {
    type: WellContainerTypes.FillWell,
    targetWell,
  };
};

/*
 * This is used to build the initial FULL/EMPTY status of all the Wells
 * */

const getAllWellInitialStatus = (
  verticalUnits: number,
  horizontalUnits: number,
  additionalInfo: any,
) => {
  const allWell: {[index: string]: string} = {};
  for (let i = 0; i < verticalUnits; i++) {
    for (let j = 0; j < horizontalUnits; j++) {
      let currentWell = `${String(i)},${String(j)}`;
      allWell[currentWell] = 'EMPTY';
    }
  }
  const result = {...allWell, ...additionalInfo};
  return result;
};

/*
 * This is well container reducer.
 * */
export const wellContainerReducer = (
  state: IWellContainerStatus = WellContainerStatus,
  action: WellContainerActions,
) => {
  switch (action.type) {
    case WellContainerTypes.InitWell:
      //console.log('action', action);
      const copiedStatus = {...state};
      copiedStatus.verticalUnits = action.payload.verticalUnits;
      copiedStatus.horizontalUnits = action.payload.horizontalUnits;
      const wellStatusResult = getAllWellInitialStatus(
        action.payload.verticalUnits,
        action.payload.horizontalUnits,
        action.additionalInfo,
      );
      //console.log('wellStatusResult', wellStatusResult);
      copiedStatus.allWellStatus = {...wellStatusResult};
      return copiedStatus;
    case WellContainerTypes.FillWell:
      const newState = {...state, allWellStatus: {...state.allWellStatus}};
      newState['allWellStatus'][(action as FillTargetWellAction).targetWell] =
        'FULL';
      return newState;
    default:
      return state;
  }
};
