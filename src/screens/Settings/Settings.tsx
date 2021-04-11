import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
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

  const wellContainerStatus = useSelector(
    (state: GlobalState) => state.wellContainerStatus,
  );

  const [wellSettings, setWell] = useState<InitWell>({
    verticalUnits: 0,
    horizontalUnits: 0,
  });

  const [wellsToFill, setWellFill] = useState<string[]>([]);

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

  console.log('random well', wellsToFill);
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
