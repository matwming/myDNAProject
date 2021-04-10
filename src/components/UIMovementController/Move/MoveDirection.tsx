import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
// @ts-ignore
import styled from 'styled-components/native';

const ViewBtn = styled.View`
  width: 40px;
  height: 30px;
  border: 1px solid black;
  color: blue;
  background-color: lightpink;
  justify-content: center;
  align-items: center;
`;

const MoveDirection = ({
  direction,
  OnMoveDirectionChange,
}: {
  direction: string;
  OnMoveDirectionChange: Function;
}) => {
  return (
    <TouchableOpacity onPress={() => OnMoveDirectionChange(direction)}>
      <ViewBtn>
        <Text style={{color: 'blue'}}>{direction}</Text>
      </ViewBtn>
    </TouchableOpacity>
  );
};

export default MoveDirection;
