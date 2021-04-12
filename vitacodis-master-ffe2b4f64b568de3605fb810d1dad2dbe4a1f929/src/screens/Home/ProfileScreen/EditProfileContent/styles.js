import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  editProfileContainer: {
    flex: 1.5,
    paddingTop: 25,
    backgroundColor: 'rgb(250,250,250)',
  },
  editProfileHeader: {
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: '#8A8A8F',
  },
  save: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: '#0D9FEC',
  },
  editInfoContent: {
    paddingHorizontal: 15,
    marginTop: 6,
    backgroundColor: '#FFFFFF',
    borderTopColor: '#F0F0F0',
    borderBottomColor: '#F0F0F0',
    borderTopWidth: 1,
    borderBottomWidth: 1,
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
  accountSettingsTitile: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: '#333333',
  },
});

export default styles;
