import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import UIWellContainer from '../components/UIWellContainer';
import UIMovementController from '../components/UIMovementController';
import useDetectOrientationHook, {
  IDeviceMode,
} from '../utils/useDetectOrientationHook';
import {useDispatch, useSelector} from 'react-redux';
import {GetWellInitialStatus} from '../store/reducers/wellContainerReducer/wellContainerReducer';
import {GlobalState} from '../store/reducers/rootReducers';

/*
 * This is the Main entry of the app.
 *
 * 1.0 The whole app is designed to connect to a backend api if you want to.
 *     Please checkout comments on line 38;
 *
 * 2.0 This component includes two components:
 *
 *   2.1 UIWellContainer
 *     2.1.1 This is how the Well container looks like. It shows the Robot, Well labels, and color to indicate whether the Well is FULL or EMPTY;
 *
 *   2.2 UIMovementController
 *     2.2.1 This includes five commands: PLACE, DETECT, DROP, MOVE, REPORT.
 *     For more information about commands please checkout src/components/UIMovementController.tsx
 *  */

const App = () => {
  const dispatch = useDispatch();
  const {verticalUnits, horizontalUnits} = useSelector(
    (state: GlobalState) => state?.wellContainerStatus,
  );

  const deviceOrientationMode = useDetectOrientationHook();
  console.log('device mode', deviceOrientationMode);

  /*
   * This useEffect is where I plan to call an api to return a data structure like this:
   *
   * const wellInitialStatus ={
   *   verticalUnits:5,
   *   horizontalUnits:5
   * }
   * const additionalWellStatus ={
   *   '1,1':'FULL',
   *   '2,2':'FULL'
   * }
   *
   * The vertical/horizontal units are used to build the Well container dynamically.
   * The additionalWell is used to tell the Well container which Wells are filled.
   * */

  useEffect(() => {
    const wellInitialStatus = {
      verticalUnits: 5,
      horizontalUnits: 5,
    };
    const additionalWellStatus = {
      '1,1': 'FULL',
      '2,2': 'FULL',
    };
    dispatch(GetWellInitialStatus(wellInitialStatus));
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <UIWellContainer
            verticalUnits={verticalUnits}
            horizontalUnits={horizontalUnits}
          />
          <UIMovementController />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
