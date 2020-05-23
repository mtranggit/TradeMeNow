import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import AppText from './AppText';

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

const PickerItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <AppText style={styles.text}>{item.label}</AppText>
  </TouchableOpacity>
);

export default PickerItem;
