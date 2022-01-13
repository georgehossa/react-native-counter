import React from 'react';
import { SafeAreaView } from 'react-native';
// import CounterScreen from './src/screens/CounterScreen';
// import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
import DimensionsScreen from './src/screens/DimensionsScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DimensionsScreen />
    </SafeAreaView>
  );
};

export default App;
