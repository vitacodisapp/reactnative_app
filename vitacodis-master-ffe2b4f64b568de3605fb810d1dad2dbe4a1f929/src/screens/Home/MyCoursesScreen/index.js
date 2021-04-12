import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import coursesActions from '_redux/actions/courses';
import coursesService from '_services/courses';
import {main, flatList} from '_styles/main';
import CourseItem from '_components/CourseItem';

const MyCoursesScreen = ({navigation}) => {
  const [myCourses, setMyCourses] = useState([]);

  const {
    auth: {currentUser},
  } = useSelector((store) => store);

  const dispatch = useDispatch();

  const setSelectedCourse = useCallback(
    (course) => dispatch(coursesActions.setSelectedCourse(course)),
    [dispatch],
  );

  const handleNavigate = useCallback(
    (item) => {
      setSelectedCourse(item);
      navigation.navigate('Details');
    },
    [navigation, setSelectedCourse],
  );

  const getMyCourses = async () => {
    try {
      const res = await coursesService.getMyCourses(currentUser.id);

      setMyCourses(res);
      console.log('myCourses', res);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getMyCourses();
  }, []);

  return (
    <SafeAreaView style={main.main}>
      <View
        style={{
          ...main.main,
          ...main.screen,
        }}>
        <Text style={{...main.headerText, ...main.firstPartHeader}}>
          My{' '}
          <Text style={{...main.headerText, ...main.secondPartHeader}}>
            courses
          </Text>
        </Text>
        <FlatList
          style={flatList.container}
          data={myCourses}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleNavigate(item)}>
              <CourseItem item={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyCoursesScreen;
