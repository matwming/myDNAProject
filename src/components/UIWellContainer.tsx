import {Image, Text, View} from 'react-native';
import React from 'react';
// @ts-ignore
import styled from 'styled-components/native';
// @ts-ignore
import uuid from 'react-uuid';
import {useSelector} from 'react-redux';
import {GlobalState} from '../store/reducers/rootReducers';
import {IAppSettings} from '../store/reducers/appSettings/appSettings';

const Container = styled.View`
  padding: 10px;
  border: 1px solid black;
  margin: 10px 5px 15px 5px;
`;

const Well = styled.View`
  border: 1px solid black;
  background-color: ${(props: {bgColor: string}) => props.bgColor};
  border-radius: 50px;
  flex: 1;
  height: 55px;
  margin-right: 5px;
`;

const WellLabels = styled.Text`
  margin-left: 10px;
  margin-top: 3px;
  display: ${({isShowWellLabels}: IAppSettings) =>
    isShowWellLabels ? 'flex' : 'none'};
`;

const UIWellContainer = ({
  verticalUnits,
  horizontalUnits,
}: {
  verticalUnits: number;
  horizontalUnits: number;
}) => {
  const {
    currentHorizontalPosition,
    currentVerticalPosition,
    isPlaced,
  } = useSelector((state: GlobalState) => state?.robotStatus);
  const currentRobotPosition = `${String(
    currentHorizontalPosition,
  )},${currentVerticalPosition}`;
  const {allWellStatus} = useSelector(
    (state: GlobalState) => state.wellContainerStatus,
  );
  const {isShowWellLabels} = useSelector(
    (state: GlobalState) => state.appSettings,
  );
  //console.log('robotPosition-place-component', currentRobotPosition);
  const HStack = ({horizontalPosition}: {horizontalPosition: number}) => {
    return (
      <View style={{flexDirection: 'row', marginTop: 5}}>
        {new Array(horizontalUnits).fill(0).map((el, index: number) => {
          const currentWellPosition = `${String(horizontalPosition)},${String(
            index,
          )}`;
          //console.log('wellPosition', currentWellPosition);
          return (
            <Well
              key={uuid()}
              bgColor={
                allWellStatus[currentWellPosition] === 'FULL'
                  ? 'lightblue'
                  : 'white'
              }>
              <WellLabels isShowWellLabels={isShowWellLabels}>
                {horizontalPosition},{index}
              </WellLabels>
              <Image
                source={require('../robot.jpeg')}
                style={{
                  height: 35,
                  width: 35,
                  marginTop: 7,
                  marginLeft: 9,
                  display:
                    currentRobotPosition === currentWellPosition && isPlaced
                      ? 'flex'
                      : 'none',
                }}
              />
            </Well>
          );
        })}
      </View>
    );
  };
  return (
    <Container>
      {new Array(verticalUnits)
        .fill(0)
        .map((el, index: number) => {
          return <HStack horizontalPosition={index} key={uuid()} />;
        })
        .reverse()}
    </Container>
  );
};

export default UIWellContainer;
