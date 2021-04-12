import React from 'react';
import {View, TextInput, Text} from 'react-native';

import styles from './styles';

const Input = ({
  style,
  icon,
  errorValidation = '',
  withoutErrors = false,
  ...rest
}) => {
  return (
    <View style={style}>
      {!withoutErrors && <Text style={styles.error}>{errorValidation}</Text>}
      <View
        style={[styles.container, errorValidation && {borderColor: '#FB5353'}]}>
        <TextInput
          placeholderTextColor="#8A8A8F"
          {...rest}
          style={styles.content}
          autoCapitalize="none"
        />
        {icon}
      </View>
    </View>
  );
};

export default Input;
