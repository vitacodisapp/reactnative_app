import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(250,250,250)',
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  crossIcon: {
    position: 'absolute',
    right: 0,
  },
  headerText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
    color: '#000000',
  },
  formContainer: {
    marginTop: 60,
    paddingHorizontal: 15,
  },
  sendBtn: {
    marginTop: 30,
    marginHorizontal: 15,
    backgroundColor: '#0D9FEC',
    alignItems: 'center',
    borderRadius: 4,
    padding: 12,
  },
  sendBtnText: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
  },
});

export default styles;
