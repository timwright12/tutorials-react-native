import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/styles'

const Home = ({ navigation }) => {
  return (
    <View style={ [styles.box, styles.container] }>
      <TouchableOpacity
        onPress={() => navigation.navigate('ColorPalette')}
        accessibilityLabel="Visit the Color List"
      >
        <Text style={ [styles.button, styles.fzMedium] }>View Color list</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
