import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HelloWorldScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola Mundo!!</Text>
    </View>
  );
};

export default HelloWorldScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
  },
});
