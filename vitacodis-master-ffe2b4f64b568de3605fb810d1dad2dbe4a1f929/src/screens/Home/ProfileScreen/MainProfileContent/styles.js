import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  profileContent: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'rgb(250,250,250)',
  },
  profileContentItemsContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'rgb(255,255,255)',
  },
  profileContentItem: {
    paddingVertical: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(240,240,240)',
  },
  itemTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    marginRight: 15,
  },
  contentItemTitle: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: '#333333',
  },
  logoutBtn: {
    marginTop: 35,
    backgroundColor: 'rgb(255,255,255)',
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
  },
});

export default styles;
