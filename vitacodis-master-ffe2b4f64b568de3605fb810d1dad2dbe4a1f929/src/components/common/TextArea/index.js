import React from 'react';
import {TextInput} from 'react-native';

import styles from './styles';

const TextArea = ({onChange, style, ...rest}) => {
  return (
    <TextInput
      style={{...styles.textarea, ...style}}
      multiline={true}
      placeholder="Your message"
      placeholderTextColor="#8A8A8F"
      onChangeText={(text) => onChange(text)}
      {...rest}
    />
  );
};

export default TextArea;
