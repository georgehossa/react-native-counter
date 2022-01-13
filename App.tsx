import React from 'react';
import { SafeAreaView } from 'react-native';
// import CounterScreen from './src/screens/CounterScreen';
// import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
// import DimensionsScreen from './src/screens/DimensionsScreen';
import TaskScreen from './src/screens/TaskScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TaskScreen />
    </SafeAreaView>
  );
};

export default App;
