import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {AirbnbRating} from 'react-native-elements';

import styles from './styles';

const ListItem = ({item, isLastItem}) => {
  const [numberOfLines, setNumberOfLines] = useState(3);

  return (
    <View key={item.id} style={styles.itemContent}>
      <View style={styles.itemInfo}>
        <Image source={item.imgUrl} style={styles.itemAvatar} />
        <View style={styles.mainInfo}>
          <View style={styles.authorContainer}>
            <Text style={styles.author}>{item.author}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
          {item.rating && (
            <AirbnbRating
              count={5}
              reviews={false}
              defaultRating={item.rating}
              size={16}
              isDisabled
              showRating={false}
            />
          )}
        </View>
      </View>
      <View>
        <Text
          style={styles.text}
          ellipsizeMode="tail"
          numberOfLines={numberOfLines}>
          {item.content}
        </Text>
        {numberOfLines !== null && (
          <Text
            style={{...styles.text, color: 'rgb(13, 159, 236)'}}
            onPress={() => setNumberOfLines(null)}>
            Read more
          </Text>
        )}
      </View>
      {!isLastItem && (
        <View
          style={{
            borderBottomColor: '#F0F0F0',
            marginTop: 20,
            marginBottom: 20,
            borderBottomWidth: 1,
          }}
        />
      )}
    </View>
  );
};

export default ListItem;
