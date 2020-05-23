import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';

import { AppForm, AppFormField, AppFormPicker, AppSubmitButton } from '../components/forms';

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
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
  { label: 'Electronic', value: 4 },
  { label: 'Tools', value: 5 },
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
      />

      <AppFormPicker items={categories} name="category" placeholder="Category" />

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
