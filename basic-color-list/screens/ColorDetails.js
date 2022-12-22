import React from 'react';
import { Text, View } from 'react-native';
import ColorBox from '../components/colorBox';
import styles from '../styles/styles';

const ColorDetails = ({ route }) => {
  const { colorName, hexCode } = route.params;
  return (
    <View style={styles.container}>
        <Text>Details for { colorName }: { hexCode }</Text>
        <ColorBox colorName={colorName} hexCode={hexCode} />
    </View>
  );
};

export default ColorDetails;
