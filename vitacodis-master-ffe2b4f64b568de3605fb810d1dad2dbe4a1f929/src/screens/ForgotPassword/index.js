import React, {useState, useCallback} from 'react';
import {View, SafeAreaView, TouchableOpacity, Text} from 'react-native';

import {main} from '_styles/main';

import Input from '_components/common/Input/index';
import EmailIcon from '_assets/images/email.svg';

import {emailRegExp} from '_constants/regexp';

import styles from './styles';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const checkEmail = useCallback((text) => {
    setEmail(text);
    if (!emailRegExp.test(text)) {
      setEmailError('Please check the spelling of email address');
    } else {
      setEmailError('');
    }
  }, []);

  const handleSend = useCallback(() => {
    console.log('email :>> ', email);
  }, [email]);

  return (
    <SafeAreaView style={main.main}>
      <View style={{...main.main, padding: 15}}>
        <Text style={main.authTitle}>Forgot password</Text>
        <Text style={styles.text}>
          Please enter your email address. You will receive a link to create a
          new password via email.
        </Text>
        <Input
          placeholder="Email Address"
          icon={<EmailIcon />}
          textContentType="emailAddress"
          onChangeText={(text) => checkEmail(text)}
          value={email}
          errorValidation={email !== '' && emailError}
        />
        <TouchableOpacity style={main.authBtnContainer} onPress={handleSend}>
          <Text style={main.authBtnText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
