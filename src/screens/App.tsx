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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import UIWellContainer from '../components/UIWellContainer';
import UIMovementController from '../components/UIMovementController';
import useDetectOrientationHook, {
  IDeviceMode,
} from '../utils/useDetectOrientationHook';
import {useDispatch, useSelector} from 'react-redux';
import {GetWellInitialStatus} from '../store/reducers/wellContainerReducer/wellContainerReducer';
import {GlobalState} from '../store/reducers/rootReducers';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log('hi');
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const {verticalUnits, horizontalUnits} = useSelector(
    (state: GlobalState) => state?.wellContainerStatus,
  );
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const deviceOrientationMode = useDetectOrientationHook();
  console.log('device mode', deviceOrientationMode);
  useEffect(() => {
    const wellInitialStatus = {
      verticalUnits: 5,
      horizontalUnits: 5,
    };
    const additionalWellStatus = {
      '1,1': 'FULL',
      '2,2': 'FULL',
    };
    dispatch(GetWellInitialStatus(wellInitialStatus, additionalWellStatus));
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
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

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
