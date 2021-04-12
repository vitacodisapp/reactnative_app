import React from 'react';
import {View} from 'react-native';

import ListItem from './ListItem/index';

const CommentsList = ({items}) => {
  return (
    <View style={{flex: 1}}>
      {items.map((item, i) => (
        <ListItem
          key={item.id}
          item={item}
          isLastItem={i === items.length - 1}
        />
      ))}
    </View>
  );
};

export default CommentsList;
