import {Button, View} from 'react-native';
import React from 'react';
import {wellTypes} from '../../store/reducers/wellContainerReducer/wellContainerReducer';
import MyAlert from '../../UI/Alert';
import {IPosition} from '../../store/reducers/robotReducer/robotReducer';
import {SubTitle} from '../../UI/Other';

export interface IMovement extends IPosition {
  allWellStatus: {
    [index: string]: wellTypes;
  };
}
interface IDetectMovement extends IMovement {
  isPlaced: boolean;
}
const Detect = ({
  currentHorizontalPosition,
  currentVerticalPosition,
  allWellStatus,
  isPlaced,
}: IDetectMovement) => {
  const currentRobotPosition = `${String(currentHorizontalPosition)},${String(
    currentVerticalPosition,
  )}`;
  const currentWellStatus: wellTypes = allWellStatus[currentRobotPosition];
  // console.log('currentWellStatus', currentWellStatus);
  return (
    <View>
      <SubTitle>2. Detect command:</SubTitle>
      <Button
        title={'Detect'}
        onPress={() => {
          MyAlert({
            title: 'Robot Detect Result',
            msg: `The Well Below is: ${currentWellStatus}`,
            hasOK: true,
          });
        }}
        disabled={!isPlaced}
      />
    </View>
  );
};

export default Detect;
