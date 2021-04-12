import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-toast-message'
import {
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Text,
} from 'react-native';

import {main, flatList} from '_styles/main';

import CourseItem from '_components/CourseItem';
import Loader from '_components/common/Loader';
import CrossIcon from '_assets/images/dark_cross.svg';

import coursesActions from '_redux/actions/courses';
import coursesService from '_services/courses';

import styles from './styles';

const CategoryListComponent = ({navigation}) => {
  const {
    courses: {selectedCategorie},
  } = useSelector((store) => store);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [categoryCourses, setCategoryCourses] = useState([]);

  const getCategoryCourses = async () => {
    setIsLoading(true);
    try {
      const res = await coursesService.getCategoryCourses(selectedCategorie.id);
      console.log('res', res);
      setCategoryCourses(res);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2:
          error.response && error.response.data
            ? error.response.data.message
            : error.message,
        autoHide: true,
        topOffset: 40,
        visibilityTime: 4000,
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getCategoryCourses();
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

  return (
    <SafeAreaView style={main.main}>
      <View
        style={{
          ...main.main,
          ...main.screen,
        }}>
        <View style={styles.header}>
          <Text
            style={{
              ...main.headerText,
              ...main.firstPartHeader,
              marginBottom: 0,
            }}>
            {selectedCategorie.name}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CrossIcon />
          </TouchableOpacity>
        </View>
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
            data={categoryCourses}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleNavigate(item)}>
                <CourseItem item={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default CategoryListComponent;
