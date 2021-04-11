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

const WellContainerStatus: IWellContainerStatus = {
  verticalUnits: 5,
  horizontalUnits: 5,
  allWellStatus: {
    '0,0': 'EMPTY',
  },
};

export enum WellContainerTypes {
  InitWell = 'InitWell',
  FillWell = 'FillWell',
}

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

export const FillTargetWell = (targetWell: string): FillTargetWellAction => {
  return {
    type: WellContainerTypes.FillWell,
    targetWell,
  };
};
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

export const wellContainerReducer = (
  state: IWellContainerStatus = WellContainerStatus,
  action: WellContainerActions,
) => {
  switch (action.type) {
    case WellContainerTypes.InitWell:
      console.log('action', action);
      const copiedStatus = {...state};
      copiedStatus.verticalUnits = action.payload.verticalUnits;
      copiedStatus.horizontalUnits = action.payload.horizontalUnits;
      const wellStatusResult = getAllWellInitialStatus(
        action.payload.verticalUnits,
        action.payload.horizontalUnits,
        action.additionalInfo,
      );
      console.log('wellStatusResult', wellStatusResult);
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
