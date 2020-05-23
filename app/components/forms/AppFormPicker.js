import React from 'react';
import { useFormikContext } from 'formik';

import { Picker } from 'react-native';
import AppPicker from '../AppPicker';
import AppErrorMessage from './AppErrorMessage';

export default function AppFormPicker({
  //
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
}) {
  const { errors, touched, values, setFieldValue } = useFormikContext();
  return (
    <>
      <AppPicker
        //
        items={items}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        onSelectedItem={item => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
