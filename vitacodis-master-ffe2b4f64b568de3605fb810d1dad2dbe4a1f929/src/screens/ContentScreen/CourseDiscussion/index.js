import React, {useCallback, useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';

import CrossIcon from '_assets/images/dark_cross.svg';

import CommentsList from '_components/CommentsList/index';
import TextArea from '_components/common/TextArea/index';

import discussions from '_mockApi/discussions';

import {main} from '_styles/main';
import styles from './styles';

const CourseDiscussion = ({navigation}) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = useCallback(() => {
    console.log(commentText);
  }, []);

  return (
    <SafeAreaView style={main.main}>
      <View
        style={{
          ...main.main,
          ...main.screen,
        }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Course Discussion</Text>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <CrossIcon style={{padding: 5}} />
          </TouchableWithoutFeedback>
        </View>
        <ScrollView>
          <View style={styles.discussionsListContainer}>
            <CommentsList items={discussions} />
          </View>
          <View style={styles.leaveCommentContainer}>
            <Text style={styles.leaveText}>Leave a Comment</Text>
            <TextArea onChange={(text) => setCommentText(text)} />
          </View>
          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CourseDiscussion;
