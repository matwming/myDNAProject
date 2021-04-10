import {Text, View} from 'react-native';
import React from 'react';
// @ts-ignore
import styled from 'styled-components/native';
// @ts-ignore
import uuid from 'react-uuid';

const Container = styled.View`
  padding: 10px;
  border: 1px solid black;
  margin: 10px 5px 15px 5px;
`;

const Well = styled.View`
  border: 1px solid black;
  background-color: lightblue;
  border-radius: 50px;
  flex: 1;
  height: 50px;
  margin-right: 5px;
`;

const UIWellContainer = ({
  verticalUnits,
  horizontalUnits,
}: {
  verticalUnits: number;
  horizontalUnits: number;
}) => {
  const HStack = ({verticalPosition}: {verticalPosition: number}) => {
    return (
      <View style={{flexDirection: 'row', marginTop: 5}}>
        {new Array(horizontalUnits).fill(0).map((el, index: number) => {
          return (
            <Well key={uuid()}>
              <Text>
                {verticalPosition} , {index}
              </Text>
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
          return <HStack verticalPosition={index} key={uuid()} />;
        })
        .reverse()}
    </Container>
  );
};

export default UIWellContainer;
