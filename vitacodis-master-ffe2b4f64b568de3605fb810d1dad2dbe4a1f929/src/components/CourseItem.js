import React, {useCallback, useEffect, useState} from 'react';
import {View, Image, Text} from 'react-native';

import {statuses} from '_constants/statuses';
import {FEATURED} from '_constants/courseType';
import {courseItem} from '_styles/main';

import Loader from '_components/common/Loader/index';

import coursesService from '_services/courses';

import imageUrl from '_assets/images/Healthy.png';

const CourseItem = ({item}) => {
  const [speaker, setSpeaker] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const geAuthor = useCallback(async () => {
    try {
      const res = await coursesService.getCourseAuthor(item.author);
      setSpeaker(res.name);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  }, [item]);

  useEffect(() => {
    geAuthor();
  }, [item]);

  return (
    <View style={courseItem.wrapper}>
      <Image style={courseItem.image} source={imageUrl} />
      <View style={courseItem.content}>
        <Text style={courseItem.title}>{item.title.rendered}</Text>
        {isLoading ? (
          <Loader style={{alignItems: 'center'}} />
        ) : (
          <Text style={courseItem.speaker}>{speaker}</Text>
        )}
        {item.type === FEATURED ? (
          <View style={courseItem.infoContainer}>
            <Text style={courseItem.infoText}>{item.course_price}</Text>
            <Text style={courseItem.infoText}>{item.duration}</Text>
          </View>
        ) : (
          <View
            style={{
              ...courseItem.statusContainer,
              ...courseItem[item.status],
            }}>
            <Text style={courseItem.status}>{statuses[item.status]}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default CourseItem;
