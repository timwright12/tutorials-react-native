import React from 'react';
import { Text, View } from 'react-native';
import ColorBox from '../components/colorBox';

const ColorDetails = ({ route }) => {
  const { colorName, hexCode } = route.params;
  return (
    <View>
        <Text>Details for this { colorName }: { hexCode }</Text>
        <ColorBox colorName={colorName} hexCode={hexCode} />
    </View>
  );
};

export default ColorDetails;
