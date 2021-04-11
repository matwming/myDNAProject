import React from 'react';
import {View, Text, SafeAreaView, ScrollView, TextInput} from 'react-native';
import {SubTitle} from '../../components/UIMovementController/Place';
import {Box, MainView, TextElement} from '../../UI/Other';
import RNPickerSelect from 'react-native-picker-select';

const Settings = () => {
  const onPickerChangeHandler = v => {
    console.log('v', v);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <MainView style={{margin: 5}}>
          <TextElement>Settings</TextElement>
        </MainView>
        <View style={{margin: 5}}>
          <Text>Feel free to change the settings for our app.</Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{marginRight: 6, marginTop: 4}}>X:</Text>
            <Box>
              <RNPickerSelect
                onValueChange={value =>
                  onPickerChangeHandler('vertical', value)
                }
                items={[{label: '1', value: '1'}]}
              />
            </Box>
          </View>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{marginRight: 6, marginTop: 4}}>Y:</Text>
            <Box>
              <RNPickerSelect
                onValueChange={value =>
                  onPickerChangeHandler('vertical', value)
                }
                items={[{label: '1', value: '1'}]}
              />
            </Box>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
