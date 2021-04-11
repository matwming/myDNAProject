import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import MoveDirection from './MoveDirection';
// @ts-ignore
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';
import {
  IMovementDirections,
  IPosition,
  moveRobot,
} from '../../../store/reducers/robotReducer/robotReducer';
import {wellTypes} from '../../../store/reducers/wellContainerReducer/wellContainerReducer';

const TopBtnView = styled.View`
  margin-left: 40px;
`;

export interface IRobotMove extends IPosition {
  isPlaced: boolean;
  verticalUnits: number;
  horizontalUnits: number;
}
const Move = ({
  currentVerticalPosition,
  currentHorizontalPosition,
  isPlaced,
  verticalUnits,
  horizontalUnits,
}: IRobotMove) => {
  const dispatch = useDispatch();
  const OnMoveDirectionChangeHandler = (
    direction: IMovementDirections,
  ): void => {
    dispatch(moveRobot(direction));
  };

  const isNextMovePermitted = (direction: IMovementDirections): boolean => {
    const verticalAvailableMovements =
      verticalUnits - (currentVerticalPosition as number) - 1;
    const horizontalAvailableMovements =
      horizontalUnits - (currentHorizontalPosition as number) - 1;
    switch (true) {
      case direction === 'N':
        console.log(currentVerticalPosition, verticalAvailableMovements);
        if (horizontalAvailableMovements === 0) return false;
        return true;
      case direction === 'S':
        if (currentHorizontalPosition === 0) return false;
        return true;
      case direction === 'W':
        if (currentVerticalPosition === 0) return false;
        return true;
      case direction === 'E':
        if (verticalAvailableMovements === 0) return false;
        return true;
      default:
        return true;
    }
  };

  return (
    <View>
      <Text> this is a move comoponent</Text>
      <View>
        <View style={{flexDirection: 'row'}}>
          <TopBtnView>
            <MoveDirection
              direction={'N'}
              OnMoveDirectionChange={OnMoveDirectionChangeHandler}
              isPlaced={isPlaced}
              isNextMovementPermitted={isNextMovePermitted('N')}
            />
          </TopBtnView>
        </View>
        <View style={{flexDirection: 'row'}}>
          <MoveDirection
            direction={'W'}
            OnMoveDirectionChange={OnMoveDirectionChangeHandler}
            isPlaced={isPlaced}
            isNextMovementPermitted={isNextMovePermitted('W')}
          />
          <MoveDirection
            direction={'S'}
            OnMoveDirectionChange={OnMoveDirectionChangeHandler}
            isPlaced={isPlaced}
            isNextMovementPermitted={isNextMovePermitted('S')}
          />
          <MoveDirection
            direction={'E'}
            OnMoveDirectionChange={OnMoveDirectionChangeHandler}
            isPlaced={isPlaced}
            isNextMovementPermitted={isNextMovePermitted('E')}
          />
        </View>
      </View>
    </View>
  );
};

export default Move;
