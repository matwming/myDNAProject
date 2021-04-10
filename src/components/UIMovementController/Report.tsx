import {Button, Text, View} from 'react-native';
import React from 'react';

const Report = () => {
  return (
    <View>
      <Text>this is a report component</Text>
      <Button
        title={'Confirm To Report'}
        onPress={() => console.log('placed a robot')}
      />
    </View>
  );
};

export default Report;
