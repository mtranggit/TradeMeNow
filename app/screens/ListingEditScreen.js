import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, AppFormPicker, AppSubmitButton } from '../components/forms';
import CategoryPickerItem from '../components/CategoryPickerItem';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required()
    .min(1)
    .label('Title'),
  price: Yup.number()
    .required()
    .min(1)
    .max(10000)
    .label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object()
    .required()
    .nullable()
    .label('Category'),
});

const categories = [
  {
    backgroundColor: '#fc5c65',
    icon: 'floor-lamp',
    label: 'Furniture',
    value: 1,
  },
  {
    backgroundColor: '#fd9644',
    icon: 'car',
    label: 'Cars',
    value: 2,
  },
  {
    backgroundColor: '#fed330',
    icon: 'camera',
    label: 'Cameras',
    value: 3,
  },
  {
    backgroundColor: '#26de81',
    icon: 'cards',
    label: 'Games',
    value: 4,
  },
  {
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel',
    label: 'Clothing',
    value: 5,
  },
  {
    backgroundColor: '#45aaf2',
    icon: 'basketball',
    label: 'Sports',
    value: 6,
  },
  {
    backgroundColor: '#4b7bec',
    icon: 'headphones',
    label: 'Movies & Music',
    value: 7,
  },
  {
    backgroundColor: '#a55eea',
    icon: 'book-open-variant',
    label: 'Books',
    value: 8,
  },
  {
    backgroundColor: '#778ca3',
    icon: 'application',
    label: 'Other',
    value: 9,
  },
];

const ListingEditScreen = () => (
  <Screen style={styles.container}>
    <AppForm
      initialValues={{
        title: '',
        price: '',
        description: '',
        category: null,
      }}
      // eslint-disable-next-line no-console
      onSubmit={values => console.log(values)}
      validationSchema={validationSchema}
    >
      <AppFormField
        //
        name="title"
        placeholder="Title"
        maxLength={255}
      />

      <AppFormField
        //
        name="price"
        placeholder="Price"
        keyboardType="numeric"
        maxLength={8}
        width={120}
      />

      <AppFormPicker
        //
        items={categories}
        name="category"
        numberOfColumns={3}
        PickerItemComponent={CategoryPickerItem}
        placeholder="Category"
        width="50%"
      />

      <AppFormField
        //
        name="description"
        placeholder="Description"
        multiline
        numberOfLines={3}
      />

      <AppSubmitButton title="Post" />
    </AppForm>
  </Screen>
);

export default ListingEditScreen;
