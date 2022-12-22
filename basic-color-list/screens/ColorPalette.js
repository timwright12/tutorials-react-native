import React from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import ColorBox from '../components/colorBox';
import COLORS from '../data/colors';
import styles from '../styles/styles'

const ColorPalette = ({ navigation }) => {
  return (
    <>
      <FlatList
        style={styles.container}
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ColorDetails', { 
              colorName: item.colorName, 
              hexCode: item.hexCode, 
            })}>
            <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
          </TouchableOpacity>
        )}
        ListHeaderComponent={<Text style={[styles.fzLarge, styles.boldText]}>A List of Colors</Text>}
      />
    </>
  );
};

export default ColorPalette;
