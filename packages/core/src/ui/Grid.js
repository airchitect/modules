import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
  },
  row: {
    flex: 1,
    flexDirection: 'column',
  },
  col: {
    flex: 1,
    flexDirection: 'column',
  },
});

const Base = (props) => {
  const { style, children } = props;
  let { type } = props;

  if(type === 'grid') {
        var row = false;
        React.Children.forEach(props.children, function (child) {
            if(child && child.type == Row)
                row = true;
        })
        if (row) type = 'row';
    }

    return (
      <View style={[styles[type], style]}>{children}</View>
    );
  }
Base.defaultProps = {
  style: {}
}

const Grid = props => Base({...props, type: 'grid'});
const Row = props => Base({...props, type: 'row'});
const Col = props => Base({...props, type: 'col'});

export { Grid, Row, Col };
