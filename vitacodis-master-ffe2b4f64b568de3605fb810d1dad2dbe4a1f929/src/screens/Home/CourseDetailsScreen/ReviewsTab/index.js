import React from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';

import userImage1 from '_assets/images/user_image-1.png';
import userImage2 from '_assets/images/user_image-2.png';

import CommentsList from '_components/CommentsList/index';

import {main} from '_styles/main';
import {common, reviewsTabStyles} from '../styles';

const reviews = [
  {
    id: 1,
    imgUrl: userImage2,
    author: 'Esther Howard (Canada)',
    date: '15.10.20',
    content:
      'Learn all the core nutrition concepts on how to evaluate food choices and to develop healthy eating patterns and your nutrition for the best health. This nutrition course will help the participants to understand the scientific basis of human nutrition.',
    rating: 3,
  },
  {
    id: 2,
    imgUrl: userImage1,
    author: 'Esther Howard Esther Howard (Canada)',
    date: '15.10.20',
    content:
      'Learn all the core nutrition concepts on how to evaluate food choices and to develop healthy eating patterns and your nutrition for the best health. This nutrition course will help the participants to understand the scientific basis of human nutrition.',
    rating: 4,
  },
];

const ReviewsTab = () => {
  return (
    <SafeAreaView style={main.main}>
      <ScrollView style={{padding: 15}}>
        <View style={{padding: 10}}>
          <View>
            <Text style={common.paragraph}>Featured Reviews</Text>
          </View>
          <View style={reviewsTabStyles.reviewsContainer}>
            <CommentsList items={reviews} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewsTab;
