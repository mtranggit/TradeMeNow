import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import AppSubmitButton from '../components/forms/AppSubmitButton';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .label('Name'),
  email: Yup.string()
    .required()
    .email()
    .label('Email'),
  password: Yup.string()
    .required()
    .min(4)
    .label('Password'),
});

const RegisterScreen = () => (
  <Screen style={styles.container}>
    <AppForm
      //
      initialValues={{ name: '', email: '', password: '' }}
      // eslint-disable-next-line no-console
      onSubmit={values => console.log(values)}
      validationSchema={validationSchema}
    >
      <AppFormField
        //
        name="name"
        icon="account"
        placeholder="Name"
        autoCorrect={false}
      />

      <AppFormField
        //
        name="email"
        icon="email"
        placeholder="email"
        autoCorrect={false}
        autoCapitalize="none"
        textContentType="emailAddress"
      />

      <AppFormField
        //
        name="password"
        icon="lock"
        placeholder="Password"
        autoCorrect={false}
        autoCapitalize="none"
        textContentType="password"
        secureTextEntry
      />

      <AppSubmitButton title="Register" />
    </AppForm>
  </Screen>
);

export default RegisterScreen;
