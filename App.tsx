import React from 'react';
import { SafeAreaView } from 'react-native';
// import CounterScreen from './src/screens/CounterScreen';
import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
};

export default App;
