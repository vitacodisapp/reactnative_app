import React, {useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';

import CrossIcon from '_assets/images/dark_cross.svg';
import Input from '_components/common/Input/index';
import CommentsList from '_components/CommentsList/index';

import discussions from '_mockApi/discussions';

import SendIcon from '_assets/images/send_1.svg';
import ActiveSendIcon from '_assets/images/send_2.svg';

import styles from './styles';

const DiscussionContentScreen = ({navigation}) => {
  const [message, setMessage] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Amet minim mollit non deserunt</Text>
        <TouchableWithoutFeedback
          style={{padding: 5}}
          onPress={() => navigation.goBack()}>
          <CrossIcon style={styles.crossIcon} />
        </TouchableWithoutFeedback>
      </View>
      <ScrollView>
        <View style={styles.discussionsContainer}>
          <CommentsList items={discussions} />
        </View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Input your message"
          onChangeText={(text) => setMessage(text)}
          value={message}
          style={{flex: 1, marginRight: 20}}
          withoutErrors
        />
        <TouchableOpacity
          onPress={() => console.log('message', message)}
          disabled={!message}>
          {message ? <ActiveSendIcon /> : <SendIcon />}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DiscussionContentScreen;
