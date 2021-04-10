import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import MoveDirection from './MoveDirection';
// @ts-ignore
import styled from 'styled-components/native';

const TopBtnView = styled.View`
  margin-left: 40px;
`;

const Move = () => {
  const OnMoveDirectionChangeHandler = (direction: string): void => {
    console.log('direction', direction);
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
            />
          </TopBtnView>
        </View>
        <View style={{flexDirection: 'row'}}>
          <MoveDirection
            direction={'W'}
            OnMoveDirectionChange={OnMoveDirectionChangeHandler}
          />
          <MoveDirection
            direction={'S'}
            OnMoveDirectionChange={OnMoveDirectionChangeHandler}
          />
          <MoveDirection
            direction={'E'}
            OnMoveDirectionChange={OnMoveDirectionChangeHandler}
          />
        </View>
      </View>
    </View>
  );
};

export default Move;
