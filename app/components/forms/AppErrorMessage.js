import React from 'react';
import { StyleSheet } from 'react-native';

import AppText from '../AppText';

const styles = StyleSheet.create({
  container: {
    color: 'red',
  },
});

const AppErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return <AppText style={styles.container}>{error}</AppText>;
};

export default AppErrorMessage;
