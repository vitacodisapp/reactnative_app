import React, {useState, useCallback} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
} from 'react-native';

import Input from '_components/common/Input/index';
import TextArea from '_components/common/TextArea/index';

import EmailIcon from '_assets/images/email.svg';
import SubjectIcon from '_assets/images/subject_icon.svg';
import CrossIcon from '_assets/images/dark_cross.svg';

import {emailRegExp, withoutSpecCharactersRegExp} from '_constants/regexp';

import styles from './styles';

const HelpSupportScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subject, setSubject] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [message, setMessage] = useState('');

  const checkEmail = useCallback((text) => {
    setEmail(text);
    if (!emailRegExp.test(text)) {
      setEmailError('Please check the spelling of email address');
    } else {
      setEmailError('');
    }
  }, []);

  const handleSend = useCallback(() => {
    if (!withoutSpecCharactersRegExp.test(subject)) {
      return setSubjectError('Subject should not contain special characters');
    } else {
      setSubjectError('');
    }
  }, [email, subject]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Help and Support</Text>
        <TouchableWithoutFeedback
          style={{padding: 5}}
          onPress={() => navigation.goBack()}>
          <CrossIcon style={styles.crossIcon} />
        </TouchableWithoutFeedback>
      </View>
      <ScrollView>
        <View style={styles.formContainer}>
          <Input
            placeholder="Your Email"
            icon={<EmailIcon />}
            textContentType="emailAddress"
            onChangeText={(text) => checkEmail(text)}
            value={email}
            errorValidation={email !== '' && emailError}
          />
          <Input
            placeholder="Your Subject"
            icon={<SubjectIcon />}
            onChangeText={(text) => setSubject(text)}
            value={subject}
            errorValidation={subject !== '' && subjectError}
            style={{marginTop: 15}}
          />
          <View style={{marginTop: 30}}>
            <TextArea
              onChange={(text) => setMessage(text)}
              value={message}
              placeholder="Your message"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
          <Text style={styles.sendBtnText}>Send</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpSupportScreen;
