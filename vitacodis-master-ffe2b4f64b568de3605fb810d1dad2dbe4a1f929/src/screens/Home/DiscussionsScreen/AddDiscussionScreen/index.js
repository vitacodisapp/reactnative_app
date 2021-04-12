import React, {useState, useCallback} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from 'react-native';

import CrossIcon from '_assets/images/dark_cross.svg';
import TextArea from '_components/common/TextArea/index';
import Input from '_components/common/Input/index';

import styles from './styles';

const AddDiscussionScreen = ({navigation}) => {
  const [discussionTitle, setDiscussionTitle] = useState('');
  const [discussionMessage, setDiscussionMessage] = useState('');

  const handleCreate = useCallback(() => {
    console.log(
      'discussionTitle, discussionTitle',
      discussionMessage,
      discussionTitle,
    );
  }, [discussionTitle, discussionMessage]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add new discussion</Text>
        <TouchableWithoutFeedback
          style={{padding: 5}}
          onPress={() => navigation.goBack()}>
          <CrossIcon style={styles.crossIcon} />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.newDiscussionContent}>
        <Input
          placeholder="Your title"
          onChangeText={(text) => setDiscussionTitle(text)}
          value={discussionTitle}
          style={{marginTop: 30}}
        />
        <View style={{marginTop: 28}}>
          <TextArea
            onChange={(text) => setDiscussionMessage(text)}
            value={discussionMessage}
            placeholder="Your message"
            style={{height: 265}}
          />
        </View>
        <TouchableOpacity style={styles.createBtn} onPress={handleCreate}>
          <Text style={styles.createBtnText}>Create</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddDiscussionScreen;
