import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles'

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text>
        This is {colorName}: {hexCode}
      </Text>
    </View>
  );
};

export default ColorBox;
