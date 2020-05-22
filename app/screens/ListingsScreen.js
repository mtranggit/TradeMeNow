import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 150,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition!',
    price: 1000,
    image: require('../assets/couch.jpg'),
  },
];

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

const ListingsScreen = () => (
  <Screen style={styles.screen}>
    <FlatList
      data={listings}
      keyExtractor={listing => listing.id.toString()}
      renderItem={({ item }) => <Card title={item.title} subTitle={`$${item.price}`} image={item.image} />}
    />
  </Screen>
);

export default ListingsScreen;
