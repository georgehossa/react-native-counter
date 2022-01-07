import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface FloatButtonProps {
  title: string;
  action: () => void;
  position: 'BL' | 'BR';
}

const FloatButton = ({ title, action, position }: FloatButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        position === 'BL' ? styles.buttonLocationBL : styles.buttonLocationBR,
      ]}
      onPress={action}>
      <View style={styles.button}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FloatButton;

const styles = StyleSheet.create({
  buttonLocationBL: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  buttonLocationBR: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
});
