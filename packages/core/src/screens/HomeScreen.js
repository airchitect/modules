import React from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';
import Test from '@airchitect/default';

const HomeScreen = (props) => (
  <>
    <Text>Salut</Text>
    <Button
      onPress={() => props.navigation.navigate('Test')}
    >Go to Details</Button>
    <Test />
  </>
);

export default HomeScreen;
