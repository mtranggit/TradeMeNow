import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

const AppText = ({ children, style }) => <Text style={[styles.text, style]}>{children}</Text>;

export default AppText;
