import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BoxObjectModelScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
    marginHorizontal: 20,
    padding: 10,
    textAlign: 'center',
    borderWidth: 2,
  },
});
