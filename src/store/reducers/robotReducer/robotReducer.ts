export interface IRobotStatus extends IPosition {
  isPlaced: boolean;
}
export interface IPosition {
  currentHorizontalPosition?: number;
  currentVerticalPosition?: number;
}

export interface MoveAction {
  readonly type: string;
  direction: IMovementDirections;
}

export type IMovementDirections = 'N' | 'W' | 'S' | 'E';

export interface PlaceAction {
  readonly type: string;
  payload: IPosition;
}

export type RobotActions = MoveAction | PlaceAction;

export enum RobotActionTypes {
  Move = 'Move',
  Place = 'Place',
}

const robotStatus: IRobotStatus = {
  currentHorizontalPosition: 0,
  currentVerticalPosition: 0,
  isPlaced: false,
};

/*robot change movement action*/
export const moveRobot = (direction: IMovementDirections): MoveAction => {
  return {
    type: RobotActionTypes.Move,
    direction,
  };
};

export const PlaceRobot = (payload: IPosition): PlaceAction => {
  return {
    type: RobotActionTypes.Place,
    payload,
  };
};
export const robotReducer = (
  state: IRobotStatus = robotStatus,
  action: RobotActions,
) => {
  switch (action.type) {
    case RobotActionTypes.Move:
      if ((action as MoveAction)?.direction === 'N') {
        const copiedState = {...state};
        (copiedState.currentHorizontalPosition as number) += 1;
        return copiedState;
      }
      if ((action as MoveAction)?.direction === 'W') {
        const copiedState = {...state};
        (copiedState.currentVerticalPosition as number) -= 1;
        return copiedState;
      }
      if ((action as MoveAction)?.direction === 'S') {
        const copiedState = {...state};
        (copiedState.currentHorizontalPosition as number) -= 1;
        return copiedState;
      }
      if ((action as MoveAction)?.direction === 'E') {
        const copiedState = {...state};
        (copiedState.currentVerticalPosition as number) += 1;
        return copiedState;
      }
    case RobotActionTypes.Place:
      const newState = {...state, ...(action as PlaceAction).payload};
      newState.isPlaced = true;
      return newState;
    default:
      return state;
  }
};
