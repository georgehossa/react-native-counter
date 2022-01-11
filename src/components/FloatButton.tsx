import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

interface FloatButtonProps {
  title: string;
  position?: 'BL' | 'BR';
  action: () => void;
}

const FloatButton = ({ title, action, position }: FloatButtonProps) => {
  const ios = () => (
    <TouchableOpacity
      style={[
        styles.buttonLocation,
        position === 'BL' ? styles.buttonLocationBL : styles.buttonLocationBR,
      ]}
      activeOpacity={0.7}
      onPress={action}>
      <View style={styles.button}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  const android = () => (
    <View
      style={[
        styles.buttonLocation,
        position === 'BL' ? styles.buttonLocationBL : styles.buttonLocationBR,
      ]}>
      <TouchableNativeFeedback
        onPress={action}
        background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );

  return Platform.OS === 'ios' ? ios() : android();
};

export default FloatButton;

const styles = StyleSheet.create({
  buttonLocation: {
    position: 'absolute',
    bottom: 20,
  },
  buttonLocationBL: {
    left: 20,
  },
  buttonLocationBR: {
    right: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
});
