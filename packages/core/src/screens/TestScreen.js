import React from 'react';
import { Button, Text } from 'react-native';

const TestScreen = (props) => (
  <>
    <Text>Salut</Text>
    <Button
      title="Go back"
      onPress={() => props.navigation.navigate('Home')}
    />
  </>
);

export default TestScreen;
