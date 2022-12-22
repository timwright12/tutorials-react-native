import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ColorPalette')}
        accessibilityLabel="Visit the Color List"
      >
        <Text>Color list</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
