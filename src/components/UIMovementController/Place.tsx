import {Button, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {wellContainerReducer as wellContainerStatus} from '../../store/reducers/wellContainerReducer/wellContainerReducer';
import {
  IPosition,
  PlaceRobot,
} from '../../store/reducers/robotReducer/robotReducer';
import {GlobalState} from '../../store/reducers/rootReducers';
import MyAlert from '../../UI/Alert';
import {Box, SubTitle} from '../../UI/Other';
import getPickerOptions from '../../utils/getPickerOptions/getOptions';

export type IDirection = 'vertical' | 'horizontal';

const Place = ({isPlaced}: {isPlaced?: boolean}) => {
  const dispatch = useDispatch();

  const {verticalUnits, horizontalUnits} = useSelector(
    (state: GlobalState) => state?.wellContainerStatus,
  );

  const [currentPosition, setPosition] = useState<IPosition>({
    currentHorizontalPosition: undefined,
    currentVerticalPosition: undefined,
  });

  const onPickerChangeHandler = (
    direction: IDirection,
    value: string | null,
  ) => {
    if (value === null) return;
    if (direction === 'horizontal') {
      let newState = {...currentPosition};
      newState.currentHorizontalPosition = Number(value);
      return setPosition(() => newState);
    }
    if (direction === 'vertical') {
      let newState = {...currentPosition};
      newState.currentVerticalPosition = Number(value);
      return setPosition(() => newState);
    }
  };

  const onPlaceHandler = () => {
    //console.log('currentposition', currentPosition);
    if (
      currentPosition.currentVerticalPosition === undefined ||
      currentPosition.currentHorizontalPosition === undefined
    ) {
      return MyAlert({
        title: 'There is an error',
        msg: 'Robot cannot be placed. Please select a valid X and Y.',
        hasOK: true,
      });
    }
    return dispatch(PlaceRobot(currentPosition));
  };

  return (
    <View style={{marginTop: 5}}>
      <SubTitle>1. Place command:</SubTitle>
      <View style={{flexDirection: 'row'}}>
        <Text style={{marginRight: 6, marginTop: 4}}>X:</Text>
        <Box>
          <RNPickerSelect
            onValueChange={value => {
              onPickerChangeHandler('horizontal', value);
            }}
            items={getPickerOptions(horizontalUnits)}
          />
        </Box>
      </View>

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Text style={{marginRight: 6, marginTop: 4}}>Y:</Text>
        <Box>
          <RNPickerSelect
            onValueChange={value => onPickerChangeHandler('vertical', value)}
            items={getPickerOptions(verticalUnits)}
          />
        </Box>
      </View>
      <Button
        title={'Confirm To Place'}
        onPress={() => {
          onPlaceHandler();
        }}
      />
    </View>
  );
};

export default Place;
