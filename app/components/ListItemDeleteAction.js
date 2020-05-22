import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ListItemDeleteAction = ({ name = 'trash-can', size = 35 }) => (
  <View style={styles.container}>
    <MaterialCommunityIcons name={name} size={size} color={colors.white} />
  </View>
);

export default ListItemDeleteAction;
