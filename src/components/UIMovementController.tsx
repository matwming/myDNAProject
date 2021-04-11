import {View, Text} from 'react-native';
import React from 'react';
import Place from './UIMovementController/Place';
import Detect from './UIMovementController/Detect';
import Drop from './UIMovementController/Drop';
import Move from './UIMovementController/Move/Move';
import Report from './UIMovementController/Report';
import {useSelector} from 'react-redux';
import {GlobalState} from '../store/reducers/rootReducers';

const UIMovementController = () => {
  const {
    currentHorizontalPosition,
    currentVerticalPosition,
    isPlaced,
  } = useSelector((state: GlobalState) => state?.robotStatus);
  const {allWellStatus, verticalUnits, horizontalUnits} = useSelector(
    (state: GlobalState) => state?.wellContainerStatus,
  );
  return (
    <View>
      <Text>Robot Arms Commands</Text>
      <Place isPlaced={isPlaced} />
      <Detect
        currentHorizontalPosition={currentHorizontalPosition}
        currentVerticalPosition={currentVerticalPosition}
        allWellStatus={allWellStatus}
        isPlaced={isPlaced}
      />
      <Drop
        currentHorizontalPosition={currentHorizontalPosition}
        currentVerticalPosition={currentVerticalPosition}
        allWellStatus={allWellStatus}
        isPlaced={isPlaced}
      />
      <Move
        currentHorizontalPosition={currentHorizontalPosition}
        currentVerticalPosition={currentVerticalPosition}
        verticalUnits={verticalUnits}
        horizontalUnits={horizontalUnits}
        isPlaced={isPlaced}
      />
      <Report
        currentHorizontalPosition={currentHorizontalPosition}
        currentVerticalPosition={currentVerticalPosition}
        allWellStatus={allWellStatus}
        isPlaced={isPlaced}
      />
    </View>
  );
};

export default UIMovementController;
