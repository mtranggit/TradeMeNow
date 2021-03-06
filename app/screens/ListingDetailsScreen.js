import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import { ListItem } from '../components/lists';
import colors from '../config/colors';

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
});

const ListingDetailsScreen = () => (
  <View>
    <Image style={styles.image} source={require('../assets/jacket.jpg')} />
    <View style={styles.detailsContainer}>
      <AppText>Red jacket for sale</AppText>
      <AppText>$100</AppText>
      <View style={styles.userContainer}>
        <ListItem image={require('../assets/mosh.jpg')} title="Mosh Hamedani" subTitle="5 Listings" />
      </View>
    </View>
  </View>
);

export default ListingDetailsScreen;
