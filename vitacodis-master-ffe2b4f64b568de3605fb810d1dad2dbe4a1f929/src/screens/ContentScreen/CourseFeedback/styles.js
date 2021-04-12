import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
    fontWeight: 'bold',
  },
  contentContainer: {
    marginHorizontal: 24,
  },
  hintText: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
  },
  interviewContainer: {
    marginTop: 10,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingTop: 15,
  },
  itemQuestion: {
    fontFamily: 'GothamPro-Bold',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#272727',
    marginBottom: 15,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  radioButton: {
    marginRight: 15,
    width: 16,
    height: 16,
    borderRadius: 50,
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  activeRadio: {
    backgroundColor: '#0D9FEC',
    borderColor: '#0D9FEC',
  },
  answerLabel: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
  },
  activeLabel: {
    color: '#0D9FEC',
  },
  lastAnswersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  verticalRadioContainer: {
    alignItems: 'center',
  },
  lastRadioButton: {
    width: 24,
    height: 24,
    borderRadius: 50,
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    marginBottom: 6,
  },
  submitBtn: {
    marginTop: 30,
    marginBottom: 50,
    backgroundColor: '#0D9FEC',
    alignItems: 'center',
    borderRadius: 4,
    padding: 12,
  },
  submitText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
  },
});

export default styles;
