import {View, Text} from 'react-native';
import React from 'react';
import Place from './UIMovementController/Place';
import Detect from './UIMovementController/Detect';
import Drop from './UIMovementController/Drop';
import Move from './UIMovementController/Move/Move';
import Report from './UIMovementController/Report';

const UIMovementController = () => {
  return (
    <View>
      <Text>Robot Arms Commands</Text>
      <Place />
      <Detect />
      <Drop />
      <Move />
      <Report />
    </View>
  );
};

export default UIMovementController;
