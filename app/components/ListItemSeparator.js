import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../config/colors';

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.light,
  },
});

const ListItemSeparator = () => <View style={styles.separator} />;

export default ListItemSeparator;
