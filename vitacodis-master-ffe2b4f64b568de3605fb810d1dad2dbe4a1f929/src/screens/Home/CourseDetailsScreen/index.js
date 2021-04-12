import React, {useEffect, useState, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';

import {setSelectedCourse} from '_redux/actions/courses';
import imageUrl from '_assets/images/Healthy.png';
import CrossIcon from '_assets/images/cross.svg';
import Loader from '_components/common/Loader';

import coursesService from '_services/courses';

import {main} from '_styles/main';
import styles from './styles';

import AboutTab from './AboutTab/index';
import ReviewsTab from './ReviewsTab/index';

const tabs = ['About', 'Reviews', 'Content'];

const CourseDetailsScreen = ({navigation}) => {
  const {
    courses: {selectedCourse},
  } = useSelector((store) => store);

  const [activeTab, setactiveTab] = useState('About');
  const [speaker, setSpeaker] = useState('');
  const [isLoading, setLoading] = useState(true);

  const geAuthor = useCallback(async () => {
    try {
      const res = await coursesService.getCourseAuthor(selectedCourse.author);
      setSpeaker(res.name);
    } catch (error) {
      console.log('error', error);
    }
    setLoading(false);
  }, [selectedCourse]);

  useEffect(() => {
    geAuthor();
    return () => setSelectedCourse(null);
  }, []);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const getTabContent = useCallback(() => {
    switch (activeTab) {
      case 'About':
        return <AboutTab />;
      case 'Reviews':
        return <ReviewsTab />;
      default:
        break;
    }
  }, [activeTab]);

  return (
    <SafeAreaView style={main.main}>
      <View style={main.main}>
        <View style={styles.imageContainer}>
          <Image source={imageUrl} style={styles.imagePreview} />
          <View style={styles.infoContainer}>
            <View style={styles.infoContent}>
              <View style={styles.titleContainer}>
                <Text style={[styles.infoText]}>
                  {selectedCourse.title.rendered}
                </Text>
                {isLoading ? (
                  <Loader />
                ) : (
                  <Text style={[styles.infoText]}>{speaker}</Text>
                )}
                <Text style={[styles.infoText]}>3h 10min</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.infoText}>
                  {selectedCourse.course_price}
                </Text>
              </View>
            </View>
            <View style={styles.iconContainer}>
              <TouchableWithoutFeedback onPress={handleGoBack}>
                <View style={styles.crossIcon}>
                  <CrossIcon style={{padding: 5}} />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        <View style={styles.tabsContainer}>
          {tabs.map((tab) => (
            <TouchableWithoutFeedback
              key={tab}
              onPress={() =>
                tab !== 'Content'
                  ? setactiveTab(tab)
                  : navigation.navigate('Content')
              }>
              <View
                style={[
                  styles.tabContainer,
                  activeTab === tab && styles.activeTab,
                ]}>
                <Text style={styles.tab}>{tab}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
        <View style={styles.tabContent}>{getTabContent()}</View>
      </View>
    </SafeAreaView>
  );
};

export default CourseDetailsScreen;
