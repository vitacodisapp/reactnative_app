import {StyleSheet} from 'react-native';

const main = StyleSheet.create({
  main: {
    flex: 1,
  },
  screen: {
    marginTop: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  firstPartHeader: {
    color: '#2A3882',
  },
  secondPartHeader: {
    color: '#0D9FEC',
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 40,
  },
  link: {
    color: '#0D9FEC',
  },
  authTitle: {
    fontFamily: 'GothamPro-Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 22,
    letterSpacing: 0.01,
    color: '#0D9FEC',
  },
  authBtnContainer: {
    marginTop: 15,
    backgroundColor: '#0D9FEC',
    alignItems: 'center',
    borderRadius: 4,
    padding: 12,
  },
  authBtnText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
  },
});

const courseItem = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#8080802e',
    borderStyle: 'solid',
    padding: 5,
    marginBottom: 25,
  },
  image: {
    flex: 1.5,
    height: '100%',
  },
  content: {
    flex: 2,
    padding: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#333333',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  speaker: {
    color: '#2A3882',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    color: '#0D9FEC',
    fontSize: 15,
    fontWeight: 'bold',
  },
  statusContainer: {
    padding: 5,
    alignSelf: 'flex-start',
  },
  startCourse: {
    backgroundColor: 'blue',
  },
  inProgress: {
    backgroundColor: 'orange',
  },
  completed: {
    backgroundColor: 'green',
  },
  status: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

const flatList = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

const categoryItem = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    marginLeft: 15,
    fontSize: 20,
    color: '#545454f5',
  },
});

export {main, courseItem, flatList, categoryItem};
