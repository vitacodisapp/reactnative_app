import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loader = ({size, styles, ...rest}) => {
  return (
    <View style={{...styles}}>
      <ActivityIndicator {...rest} size={size} />
    </View>
  );
};

export default Loader;
