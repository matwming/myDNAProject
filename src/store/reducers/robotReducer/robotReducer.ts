/*
 * Start of types definition
 * */
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
/*
 * End of types definition
 * */

/*
 * This is the initial status for the robot
 * */
const robotStatus: IRobotStatus = {
  currentHorizontalPosition: 0,
  currentVerticalPosition: 0,
  isPlaced: false,
};

/*This is a robot change movement action.
 * It is used to move the robot by one well
 * */
export const moveRobot = (direction: IMovementDirections): MoveAction => {
  return {
    type: RobotActionTypes.Move,
    direction,
  };
};

/*
 * This is a place robot action.
 * It is used to place a robot on the Well container.
 * */
export const PlaceRobot = (payload: IPosition): PlaceAction => {
  return {
    type: RobotActionTypes.Place,
    payload,
  };
};

/*
This is robot reducer
* */
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
