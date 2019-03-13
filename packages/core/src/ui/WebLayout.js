import React, { Component } from "react";
import { Col, Row, Grid } from "./Grid";
import { SceneView } from "@react-navigation/core";
import { Link } from "@react-navigation/web";
import AppBar from './AppBar';
import Drawer from './Drawer';
import { Text } from 'react-native';

export default class AppView extends Component {
  render() {
    const { descriptors, navigation } = this.props;
    const activeKey = navigation.state.routes[navigation.state.index].key;
    const descriptor = descriptors[activeKey];
    return (
      <>
        <AppBar />
        <Grid>
          <Col style={{maxWidth: 240}}>
            <Drawer />
          </Col>
          <Col>
            <Link routeName={"Home"} navigation={navigation}>
              Home
            </Link>
            <SceneView
              navigation={descriptor.navigation}
              component={descriptor.getComponent()}
            />
          </Col>
        </Grid>
      </>
    );
  }
}
