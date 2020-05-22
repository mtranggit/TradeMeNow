import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

const Screen = ({ children, style }) => <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;

export default Screen;
