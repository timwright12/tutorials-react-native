import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

const ColorBox = ({ colorName, hexCode }) => {
  const colorStyle = {
    backgroundColor: hexCode,
  };

  const textStyle = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 2
        ? 'black'
        : 'white',
  };

  return (
    <View style={ [styles.box, colorStyle] }>
      <Text style={ [styles.fzMedium, textStyle] }>
        This is { colorName }: { hexCode }
      </Text>
    </View>
  );
};

export default ColorBox;
