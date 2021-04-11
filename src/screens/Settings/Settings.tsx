import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
  Switch,
} from 'react-native';
import {Box, MainView, SubTitle, TextElement} from '../../UI/Other';
import RNPickerSelect from 'react-native-picker-select';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalState} from '../../store/reducers/rootReducers';
import getPickerOptions from '../../utils/getPickerOptions/getOptions';
import {
  FillTargetWell,
  GetWellInitialStatus,
  InitWell,
} from '../../store/reducers/wellContainerReducer/wellContainerReducer';
import {IDirection} from '../../components/UIMovementController/Place';
import getRandomWell from '../../utils/getRandomWells/getRandomWells';
import {ToggleWellLabels} from '../../store/reducers/appSettings/appSettings';

/*
 * This is Settings Screen. There are three settings you can make in this screen.
 *
 * 1.0 Change Horizontal/Vertical units.
 *  1.1 The default Horizontal/Vertical units are 5*5. You can change the default settings here.
 *       The Well Container is dynamically built by the settings or an api.
 *
 * 2.0 Randomly fill the Wells (up to 3).
 *  2.1 This is used to randomly fill the Wells.You can randomly fill 1/2/3 Wells from a picker.
 *
 * 3.0 Toggle the Well labels.
 *  3.1: This is used to show/hide x,y for every well on the top of the Well.
 *
 * */

const Settings = () => {
  const onPickerChangeHandler = (direction: IDirection, value: string) => {
    if (direction === 'horizontal') {
      let newState = {...wellSettings};
      newState.horizontalUnits = Number(value);
      return setWell(() => newState);
    }
    if (direction === 'vertical') {
      let newState = {...wellSettings};
      newState.verticalUnits = Number(value);
      return setWell(() => newState);
    }
  };

  const dispatch = useDispatch();
  const {isShowWellLabels} = useSelector(
    (state: GlobalState) => state.appSettings,
  );
  const wellContainerStatus = useSelector(
    (state: GlobalState) => state.wellContainerStatus,
  );

  const [wellSettings, setWell] = useState<InitWell>({
    verticalUnits: 0,
    horizontalUnits: 0,
  });

  const [wellsToFill, setWellFill] = useState<string[]>([]);

  const toggleSwitch = () => {
    dispatch(ToggleWellLabels());
  };

  useEffect(() => {
    setWell({
      horizontalUnits: wellContainerStatus.horizontalUnits,
      verticalUnits: wellContainerStatus.verticalUnits,
    });
  }, []);

  console.log('wellSettings', wellSettings);

  const onRandomlyFillWellHandler = (value: string) => {
    let randomlyFillWellLocation = getRandomWell(
      wellContainerStatus.horizontalUnits,
      wellContainerStatus.verticalUnits,
      Number(value),
    );
    setWellFill(() => randomlyFillWellLocation as string[]);
  };

  //console.log('random well', wellsToFill);

  return (
    <SafeAreaView>
      <ScrollView>
        <MainView style={{margin: 5}}>
          <TextElement>Settings</TextElement>
        </MainView>
        <View style={{margin: 5}}>
          <Text style={{opacity: 0.6}}>
            Feel free to change the settings for our app.
          </Text>

          {/*This is Setting 1 */}
          <SubTitle style={{marginTop: 10}}>
            1. Change Horizontal/Vertical Units for the Well (5 * 5)
          </SubTitle>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{marginRight: 6, marginTop: 4}}>
              Horizontal Units:
            </Text>
            <Box>
              <RNPickerSelect
                onValueChange={value =>
                  onPickerChangeHandler('horizontal', value)
                }
                value={String(wellSettings.horizontalUnits)}
                items={getPickerOptions(wellSettings.horizontalUnits * 2)}
              />
            </Box>
          </View>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{marginRight: 6, marginTop: 4}}>Vertical Units:</Text>
            <Box>
              <RNPickerSelect
                onValueChange={value =>
                  onPickerChangeHandler('vertical', value)
                }
                value={String(wellSettings.verticalUnits)}
                items={getPickerOptions(wellSettings.verticalUnits * 2)}
              />
            </Box>
          </View>

          <Button
            title={'Save Changes'}
            onPress={() => {
              dispatch(GetWellInitialStatus(wellSettings));
            }}
          />

          {/*This is Setting 2 */}
          <SubTitle style={{marginTop: 10}}>
            2. Fills Wells randomly: please select how many wells you want to
            randomly fill (from 1-3)
          </SubTitle>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{marginRight: 6, marginTop: 4}}>
              NO. of Wells randomly fill:
            </Text>
            <Box style={{width: '50%'}}>
              <RNPickerSelect
                onValueChange={value => onRandomlyFillWellHandler(value)}
                items={[
                  {label: '1', value: '1'},
                  {label: '2', value: '2'},
                  {label: '3', value: '3'},
                ]}
              />
            </Box>
          </View>

          <Button
            title={'Fill The Wells'}
            onPress={() => {
              for (let i = 0; i < wellsToFill.length; i++) {
                dispatch(FillTargetWell(wellsToFill[i]));
              }
            }}
          />

          {/*This is Setting 3 */}
          <SubTitle style={{marginTop: 10}}>
            3. Toggle the button to show Well labels (show 'x,y' for Wells)
          </SubTitle>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isShowWellLabels}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
