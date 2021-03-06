import {View, Text} from 'react-native';
import React from 'react';
import Place from './UIMovementController/Place';
import Detect from './UIMovementController/Detect';
import Drop from './UIMovementController/Drop';
import Move from './UIMovementController/Move/Move';
import Report from './UIMovementController/Report';
import {useSelector} from 'react-redux';
import {GlobalState} from '../store/reducers/rootReducers';
import {MainView, TextElement} from '../UI/Other';

/*
 * This is UIMovementController component.
 * It has five commands: PLACE DETECT DROP MOVE and REPORT.
 * Each command has its own component. They are all defined in UIMovementController folder.
 * */

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
    <View style={{margin: 5}}>
      <MainView>
        <TextElement>Robot Arms Commands:</TextElement>
      </MainView>

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
