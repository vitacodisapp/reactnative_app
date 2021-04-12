import React from 'react';
import {View, Text} from 'react-native';

import ArrowRight from '_assets/images/arrow_right.svg';

import {categoryItem} from '_styles/main';

const CourseItem = ({item}) => {
  return (
    <View style={categoryItem.container}>
      <View style={categoryItem.content}>
        {item.icon}
        <Text style={categoryItem.text}>{item.name}</Text>
      </View>
      <ArrowRight />
    </View>
  );
};

export default CourseItem;
