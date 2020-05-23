import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import AppErrorMessage from './AppErrorMessage';

export default function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, touched, errors, handleChange } = useFormikContext();
  return (
    <>
      <AppTextInput
        //
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
