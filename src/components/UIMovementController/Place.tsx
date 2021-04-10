import {Button, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React from 'react';

const Place = () => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text>X:</Text>
        <RNPickerSelect
          onValueChange={value => console.log(value)}
          items={[
            {label: 'Football', value: 'football'},
            {label: 'Baseball', value: 'baseball'},
            {label: 'Hockey', value: 'hockey'},
          ]}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text>Y:</Text>
        <RNPickerSelect
          onValueChange={value => console.log(value)}
          items={[
            {label: 'Football', value: 'football'},
            {label: 'Baseball', value: 'baseball'},
            {label: 'Hockey', value: 'hockey'},
          ]}
        />
      </View>
      <Button
        title={'Confirm To Place'}
        onPress={() => console.log('placed a robot')}
      />
    </View>
  );
};

export default Place;
