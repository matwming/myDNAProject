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
type IDirection = 'vertical' | 'horizontal';
const Place = ({isPlaced}: {isPlaced?: boolean}) => {
  const dispatch = useDispatch();
  const {verticalUnits, horizontalUnits} = useSelector(
    (state: GlobalState) => state?.wellContainerStatus,
  );
  const getOptions = (units: number) =>
    new Array(units).fill(0).map((el, index: number) => {
      return {
        label: String(index),
        value: String(index),
      };
    });
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
    console.log('currentposition', currentPosition);
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
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text>X:</Text>
        <RNPickerSelect
          onValueChange={value => {
            onPickerChangeHandler('horizontal', value);
          }}
          items={getOptions(horizontalUnits)}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text>Y:</Text>
        <RNPickerSelect
          onValueChange={value => onPickerChangeHandler('vertical', value)}
          items={getOptions(verticalUnits)}
        />
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
