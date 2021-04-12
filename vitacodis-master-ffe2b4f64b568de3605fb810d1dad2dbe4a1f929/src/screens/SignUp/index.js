import React, {useMemo, useCallback, useState, useRef} from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import LinkedInModal from 'react-native-linkedin';
import {GoogleSignin} from 'react-native-google-signin';

import {main} from '_styles/main';
import {authStyles} from '_styles/auth';
import Input from '_components/common/Input/index';
import Loader from '_components/common/Loader';

import NameIcon from '_assets/images/first_name.svg';
import ErrorNameIcon from '_assets/images/error_name.svg';
import EmailIcon from '_assets/images/email.svg';
import ErrorEmailIcon from '_assets/images/error_email.svg';
import EyeIcon from '_assets/images/eye_open.svg';
import ErrorEyeIcon from '_assets/images/error_eye_open.svg';
import ClosedEyeIcon from '_assets/images/eye-off.svg';
import ErrorClosedEye from '_assets/images/error_eye_off.svg';
import LinkedInIcon from '_assets/images/linkedin.svg';
import GoogleIcon from '_assets/images/Google_logo.svg';
import FacebookIcon from '_assets/images/Facebook_logo.svg';
import AppLogo from '_assets/images/app-logo.png';

import authService from '_services/auth';
import authActions from '_actions/auth';

import {emailRegExp, withoutSpecCharactersRegExp} from '_constants/regexp';

const SignUp = ({navigation}) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [isSecurePassword, setSecurePassword] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const linkedInRef = useRef();

  const dispatch = useDispatch();

  const setCurrentUser = useCallback(
    (currentUser) => dispatch(authActions.setCurrentUser(currentUser)),
    [dispatch],
  );

  const handleChangeForm = useCallback(
    (field, value) => {
      if (field === 'email') {
        setEmailError('');
      }
      if (field === 'password') {
        setPasswordError('');
      }
      if (field === 'firstName') {
        setFirstNameError('');
      }
      if (field === 'lastName') {
        setLastNameError('');
      }

      setForm({
        ...form,
        [field]: value,
      });
    },
    [form],
  );

  const Eye = useMemo(() => {
    if (isSecurePassword) {
      return passwordError ? <ErrorEyeIcon /> : <EyeIcon />;
    }
    return passwordError ? <ErrorClosedEye /> : <ClosedEyeIcon />;
  }, [isSecurePassword, passwordError]);

  const linkedInButton = useCallback(
    () => (
      <TouchableOpacity
        style={{...authStyles.socialContainer, ...authStyles.linkedContainer}}
        onPress={() => linkedInRef.current.open()}>
        <LinkedInIcon style={authStyles.socialIcon} />
        <Text style={main.authBtnText}>LinkedIn</Text>
      </TouchableOpacity>
    ),
    [],
  );
  const googleButton = useMemo(
    () => (
      <TouchableOpacity
        style={{
          ...authStyles.socialContainer,
          ...authStyles.googleContainer,
        }}>
        <GoogleIcon style={authStyles.socialIcon} />
        <Text style={main.authBtnText}>Google</Text>
      </TouchableOpacity>
    ),
    [],
  );
  const facebookButton = useMemo(
    () => (
      <TouchableOpacity
        style={{
          ...authStyles.socialContainer,
          ...authStyles.facebookContainer,
        }}>
        <FacebookIcon style={authStyles.socialIcon} />
        <Text style={main.authBtnText}>Facebook</Text>
      </TouchableOpacity>
    ),
    [],
  );

  const checkEmail = useCallback(
    (text) => {
      handleChangeForm('email', text);
      if (!emailRegExp.test(text)) {
        setEmailError('Please check the spelling of email address');
      } else {
        setEmailError('');
      }
    },
    [handleChangeForm],
  );

  const validate = useCallback(() => {
    setPasswordError('');

    if (form.firstName === '') {
      setFirstNameError('First Name cannot be blank');
    } else {
      if (!withoutSpecCharactersRegExp.test(form.firstName)) {
        setFirstNameError('Name should not contain special characters');
      }
    }
    if (form.lastName === '') {
      setLastNameError('Last Name cannot be blank');
    }

    if (form.email === '') {
      setEmailError('Email cannot be blank');
    }

    if (form.password.trim() === '') {
      setPasswordError('Password cannot be blank!');
    }
    if (form.password.trim().length < 8) {
      setPasswordError('Password should contain at least 8 symbols');
    }
  }, [form.firstName, form.lastName, form.email, form.password]);

  const activateAccount = useCallback(async (user) => {
    try {
      await authService.activate(user.activation_key);

      setCurrentUser(user);
      navigation.replace('Home');
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  const handleSignUp = useCallback(async () => {
    validate();
    if (
      form.firstName === '' ||
      !withoutSpecCharactersRegExp.test(form.firstName) ||
      form.email === '' ||
      form.lastName === '' ||
      form.password.trim() === '' ||
      form.password.trim().length < 8
    ) {
      return;
    }

    try {
      setLoading(true);
      const [registeredUser] = await authService.signup({
        user_email: form.email,
        password: form.password,
        user_login: `${form.firstName} ${form.lastName}`,
        user_name: `${form.firstName} ${form.lastName}`,
      });

      await activateAccount(registeredUser);
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
    } finally {
      setLoading(false);
    }
  }, [navigation, form]);

  return (
    <SafeAreaView style={main.main}>
      <ScrollView>
        <View style={{...main.main, ...authStyles.authContainer}}>
          <Image source={AppLogo} style={main.logo} />
          <Text style={main.authTitle}>Sign up</Text>
          <View>
            <Input
              placeholder="First Name"
              icon={firstNameError ? <ErrorNameIcon /> : <NameIcon />}
              onChangeText={(text) => handleChangeForm('firstName', text)}
              value={form.firstName}
              errorValidation={firstNameError}
              style={{marginTop: 10}}
            />
            <Input
              placeholder="Last Name"
              icon={lastNameError ? <ErrorNameIcon /> : <NameIcon />}
              onChangeText={(text) => handleChangeForm('lastName', text)}
              value={form.lastName}
              errorValidation={lastNameError}
              style={{marginTop: 10}}
            />
            <Input
              placeholder="Email Address"
              icon={emailError ? <ErrorEmailIcon /> : <EmailIcon />}
              textContentType="emailAddress"
              onChangeText={(text) => checkEmail(text)}
              value={form.email}
              errorValidation={emailError}
              style={{marginTop: 10}}
            />
            <Input
              placeholder="Password"
              secureTextEntry={isSecurePassword}
              icon={
                <TouchableOpacity
                  onPress={() => setSecurePassword(!isSecurePassword)}>
                  {Eye}
                </TouchableOpacity>
              }
              textContentType="password"
              onChangeText={(text) => handleChangeForm('password', text)}
              value={form.password}
              errorValidation={passwordError}
              style={{marginTop: 10}}
            />
          </View>
          <TouchableOpacity
            style={main.authBtnContainer}
            onPress={handleSignUp}>
            {isLoading ? (
              <Loader size="small" color="#FFFFFF" />
            ) : (
              <Text style={main.authBtnText}>Create account</Text>
            )}
          </TouchableOpacity>
          <Text style={authStyles.authText}>Sign up with</Text>
          <View style={authStyles.socialBtnsContainer}>
            <LinkedInModal
              ref={linkedInRef}
              clientID="[ Your client id from https://www.linkedin.com/developer/apps ]"
              clientSecret="[ Your client secret from https://www.linkedin.com/developer/apps ]"
              redirectUri="[ Your redirect uri set into https://www.linkedin.com/developer/apps ]"
              onSuccess={(token) => console.log(token)}
              renderButton={linkedInButton}
            />

            {googleButton}
            {facebookButton}
          </View>
          <Text style={authStyles.authText}>
            By continuing, you agree to our{' '}
            <Text
              style={main.link}
              onPress={() => console.log('privacy police :>> ')}>
              {' '}
              Privacy Policy{' '}
            </Text>
            and
            <Text
              style={main.link}
              onPress={() => console.log('term of ise :>> ')}>
              {' '}
              Terms of Use{' '}
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
