import React from 'react';
import {
  createNavigator,
  SwitchRouter
} from "@react-navigation/core";
import { createBrowserApp } from '@react-navigation/web';
import { Provider as PaperProvider } from 'react-native-paper';
import routes from './routes';
import WebLayout from './ui/WebLayout';

const AppNavigator = createNavigator(
  WebLayout,
  SwitchRouter(routes),
  {}
);

const Router = createBrowserApp(AppNavigator);


const App = () => (
<PaperProvider>
  <style type="text/css">{`
    @font-face {
      font-family: 'MaterialIcons';
      src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
    }
  `}</style>
  <Router />
</PaperProvider>
);

export default App;
