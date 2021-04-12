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
  changePasswordContent: {
    marginTop: 31,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingHorizontal: 15,
  },
  infoItemContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  infoItemTitle: {
    flex: 1,
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: '#8A8A8F',
  },
  input: {
    flex: 1.5,
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#333333',
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  changePassHint: {
    marginTop: 10,
    marginHorizontal: 15,
    marginBottom: 30,
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 18,
    color: '#8A8A8F',
  },
  savePassBtn: {
    marginHorizontal: 15,
    backgroundColor: '#0D9FEC',
    alignItems: 'center',
    borderRadius: 4,
    padding: 12,
  },
  savePassBtnText: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  error: {
    marginTop: 10,
    marginHorizontal: 15,
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 18,
    color: 'red',
  },
});

export default styles;
