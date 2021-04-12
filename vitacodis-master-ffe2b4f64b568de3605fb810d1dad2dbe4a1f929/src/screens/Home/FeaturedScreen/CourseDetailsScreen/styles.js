import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: '90%',
    height: '30%',
    backgroundColor: '#000000',
    borderRadius: 2,
    margin: '5%',
  },
  imagePreview: {
    opacity: 0.5,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  infoContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  titleContainer: {
    height: '70%',
    justifyContent: 'space-between',
  },
  priceContainer: {
    flex: 1,
    height: '30%',
    justifyContent: 'flex-end',
  },
  infoText: {
    fontFamily: 'OpenSans-Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 19,
    lineHeight: 25,
    color: '#FFFFFF',
  },
  tabsContainer: {
    width: '90%',
    marginHorizontal: '5%',
    flexDirection: 'row',
    height: 35,
    padding: 2,
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.14)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  tab: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    color: '#8A8A8F',
  },
  tabContent: {
    flex: 1,
  },
  crossIcon: {
    padding: 5,
  },
});

const common = StyleSheet.create({
  paragraph: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 22,
    color: '#333333',
    textAlign: 'justify',
  },
});

const aboutTabStyles = StyleSheet.create({
  instructorContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
  },
  instructorImage: {
    width: '30%',
    height: '100%',
    resizeMode: 'cover',
    marginRight: 10,
  },
  instructorInfo: {
    flex: 1,
  },
  instructorName: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 14,
    color: '#333333',
    marginBottom: 5,
  },
  instructorPosition: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: '#8A8A8F',
    marginBottom: 10,
  },
  instructorContacts: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
  },
  resourcesContainer: {
    marginTop: 15,
  },
  resourceContent: {
    flex: 1,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  resourceType: {
    marginRight: 12,
  },
  resourceInfo: {
    flex: 1,
  },
  resourceTitle: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    color: '#333333',
  },
  resourceAuthor: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 12,
    color: '#8A8A8F',
  },
});

const reviewsTabStyles = StyleSheet.create({
  reviewsContainer: {
    marginTop: 20,
  },
});

export {common, aboutTabStyles, reviewsTabStyles};
export default styles;
