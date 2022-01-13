import React from 'react';
import {
  StyleSheet,
  View,
  useWindowDimensions,
  Dimensions,
} from 'react-native';

const { width: initialWidth, height: initialHeight } = Dimensions.get('window');

const DimensionsScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={{ ...styles.purpleBox, width: width * 0.8 }} />
      <View style={styles.orangeBox} />
    </View>
  );
};

export default DimensionsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: initialHeight,
  },
  purpleBox: {
    width: initialWidth * 0.5,
    height: initialHeight * 0.5,
    backgroundColor: 'purple',
  },
  orangeBox: {
    width: '50%',
    height: '50%',
    backgroundColor: 'orange',
  },
});
