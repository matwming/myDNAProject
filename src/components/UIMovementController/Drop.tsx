import {View, Text, Button} from 'react-native';
import React from 'react';
const Drop = () => {
  return (
    <View>
      <Text>this is a drop component</Text>
      <Button
        title={'Confirm To Drop'}
        onPress={() => console.log('placed a robot')}
      />
    </View>
  );
};

export default Drop;
