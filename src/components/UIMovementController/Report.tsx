import {Button, View} from 'react-native';
import React from 'react';
import {IMovement} from './Detect';
import MyAlert from '../../UI/Alert';
import {SubTitle} from '../../UI/Other';

export interface IReport extends IMovement {
  isPlaced: boolean;
}
const Report = ({
  currentHorizontalPosition,
  currentVerticalPosition,
  allWellStatus,
  isPlaced,
}: IReport) => {
  const currentRobotPosition = `${String(currentHorizontalPosition)},${String(
    currentVerticalPosition,
  )}`;

  const WellBelowStatus = allWellStatus[currentRobotPosition];

  const totalFilledWells = Object.values(allWellStatus).filter(
    status => status === 'FULL',
  ).length;

  const onGetReportHandler = () => {
    return MyAlert({
      title: 'Robot Report Result',
      msg: `
            X: ${isPlaced ? currentHorizontalPosition : 'Not Placed'},
            Y: ${isPlaced ? currentVerticalPosition : 'Not Placed'},
            Well Below: ${isPlaced ? WellBelowStatus : 'Not Placed'},
            Total Filled Wells: ${totalFilledWells}
            `,
    });
  };

  return (
    <View style={{marginTop: 5}}>
      <SubTitle>5. Report command:</SubTitle>
      <Button
        title={'Report'}
        onPress={() => onGetReportHandler()}
        disabled={!isPlaced}
      />
    </View>
  );
};

export default Report;
