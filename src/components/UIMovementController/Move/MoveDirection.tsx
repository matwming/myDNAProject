import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
// @ts-ignore
import styled from 'styled-components/native';

interface IButtonStatus {
  isPlaced: boolean;
  isNextMovementPermitted: boolean;
}

interface IMoveDirection extends IButtonStatus {
  direction: string;
  OnMoveDirectionChange: Function;
}

const ViewBtn = styled.View`
  width: 60px;
  height: 50px;
  border: 1px solid black;
  color: blue;
  background-color: ${({isPlaced, isNextMovementPermitted}: IButtonStatus) =>
    isPlaced && isNextMovementPermitted ? 'lightblue' : 'lightgrey'};
  justify-content: center;
  align-items: center;
`;

const MoveDirection = ({
  direction,
  OnMoveDirectionChange,
  isPlaced,
  isNextMovementPermitted,
}: IMoveDirection) => {
  return (
    <TouchableOpacity
      onPress={() => OnMoveDirectionChange(direction)}
      disabled={!isPlaced || !isNextMovementPermitted}>
      <ViewBtn
        isPlaced={isPlaced}
        isNextMovementPermitted={isNextMovementPermitted}>
        <Text style={{color: 'black'}}>{direction}</Text>
      </ViewBtn>
    </TouchableOpacity>
  );
};

export default MoveDirection;
