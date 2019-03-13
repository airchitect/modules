import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider as PaperProvider } from 'react-native-paper';
import routes from './routes';
import AppBar from './ui/AppBar';

const AppNavigator = createStackNavigator(routes, {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      header: props => <AppBar {...props} />
    }
  });

const Router = createAppContainer(AppNavigator);

export default () => (
  <PaperProvider><Router /></PaperProvider>
)
