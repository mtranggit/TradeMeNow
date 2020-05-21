import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

const AppButton = ({ title, onPress, color = 'primary' }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.button,
      {
        backgroundColor: colors[color],
      },
    ]}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

export default AppButton;
