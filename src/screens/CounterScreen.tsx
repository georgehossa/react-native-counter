import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FloatButton from '../components/FloatButton';

const CounterScreen = () => {
  const [counter, setCounter] = useState(10);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <View style={styles.conntainer}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <FloatButton title="+1" action={increment} position="BR" />
      <FloatButton title="-1" action={decrement} position="BL" />
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  conntainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
});
