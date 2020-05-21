import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: '500',
  },
});

const Card = ({ title, subTitle, image }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={image} />
    <View>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subTitle}>{subTitle}</AppText>
    </View>
  </View>
);

export default Card;
