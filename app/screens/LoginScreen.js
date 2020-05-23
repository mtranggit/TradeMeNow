import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import AppSubmitButton from '../components/forms/AppSubmitButton';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email()
    .label('Email'),
  password: Yup.string()
    .required()
    .min(4)
    .label('Password'),
});

const LoginScreen = () => (
  <Screen style={styles.container}>
    <Image style={styles.logo} source={require('../assets/logo-red.png')} />
    <AppForm
      initialValues={{ email: '', password: '' }}
      // eslint-disable-next-line no-console
      onSubmit={values => console.log(values)}
      validationSchema={validationSchema}
    >
      <AppFormField
        //
        name="email"
        placeholder="Email"
        textContentType="emailAddress"
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
      />
      <AppFormField
        //
        name="password"
        placeholder="Password"
        textContentType="password"
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        secureTextEntry
      />
      <AppSubmitButton title="Login" />
    </AppForm>
  </Screen>
);

export default LoginScreen;
