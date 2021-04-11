import {View, Text, Button} from 'react-native';
import React from 'react';
import {IPosition} from '../../store/reducers/robotReducer/robotReducer';
import {IMovement} from './Detect';
import {
  FillTargetWell,
  wellTypes,
} from '../../store/reducers/wellContainerReducer/wellContainerReducer';
import {useDispatch} from 'react-redux';
import MyAlert from '../../UI/Alert';

export interface IDropMovement extends IMovement {
  isPlaced: boolean;
}
const Drop = ({
  currentVerticalPosition,
  currentHorizontalPosition,
  allWellStatus,
  isPlaced,
}: IDropMovement) => {
  const dispatch = useDispatch();
  const onDropHandler = () => {
    const currentRobotPosition = `${String(currentHorizontalPosition)},${String(
      currentVerticalPosition,
    )}`;
    const currentWellStatus: wellTypes = allWellStatus[currentRobotPosition];
    if (currentWellStatus === 'FULL') {
      return MyAlert({
        title: 'Ops',
        msg: 'The Well below is already FULL.',
        hasOK: true,
      });
    }
    return dispatch(FillTargetWell(currentRobotPosition));
  };
  return (
    <View>
      <Text>this is a drop component</Text>
      <Button
        title={'Drop'}
        onPress={() => onDropHandler()}
        disabled={!isPlaced}
      />
    </View>
  );
};

export default Drop;
