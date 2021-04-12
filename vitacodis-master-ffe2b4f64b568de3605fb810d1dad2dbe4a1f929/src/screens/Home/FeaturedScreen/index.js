import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';

import coursesActions from '_redux/actions/courses';
import {main, flatList} from '_styles/main';
import CourseItem from '_components/CourseItem';
import Loader from '_components/common/Loader';

import coursesService from '_services/courses';

const FeaturedScreen = ({navigation}) => {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const getFeaturedCourses = useCallback(async () => {
    try {
      const res = await coursesService.getFeaturedCourses();
      setFeaturedCourses(res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const setSelectedCourse = useCallback(
    (course) => dispatch(coursesActions.setSelectedCourse(course)),
    [dispatch],
  );

  const handleNavigate = useCallback(
    async (item) => {
      setSelectedCourse(item);
      navigation.navigate('Details');
    },
    [navigation, setSelectedCourse],
  );

  useEffect(() => {
    getFeaturedCourses();
  }, []);

  return (
    <SafeAreaView style={main.main}>
      <View
        style={{
          ...main.main,
          ...main.screen,
        }}>
        <Text style={{...main.headerText, ...main.firstPartHeader}}>
          Featured{' '}
          <Text style={{...main.headerText, ...main.secondPartHeader}}>
            Courses
          </Text>
        </Text>
        {isLoading ? (
          <Loader
            size="large"
            styles={{
              flex: 1,
              justifyContent: 'center',
              flexDirection: 'row',
              padding: 10,
            }}
          />
        ) : (
          <FlatList
            style={flatList.container}
            data={featuredCourses}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleNavigate(item)}>
                <CourseItem item={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default FeaturedScreen;
