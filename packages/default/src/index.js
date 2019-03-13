import React from 'react'
import { Button } from 'react-native-paper';

const TestButton = ({ type = 'button', children, onClick }) => (
    <Button>
      {children}
    </Button>
)

export default TestButton
