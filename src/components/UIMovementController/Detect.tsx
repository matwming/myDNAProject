import {Button, Text, View} from 'react-native';
import React from 'react';
const Detect = () => {
  return (
    <View>
      <Text>this is a detect component</Text>
      <Button
        title={'Confirm To Detect'}
        onPress={() => console.log('placed a robot')}
      />
    </View>
  );
};

export default Detect;
