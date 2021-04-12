import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orangeBubble: {
    position: 'absolute',
    top: '25%',
    left: '20%',
    width: 72,
    height: 72,
    borderRadius: 50,
    backgroundColor: '#F9A34D',
  },
  redBubble: {
    position: 'absolute',
    top: '14%',
    right: '32%',
    width: 68,
    height: 68,
    borderRadius: 50,
    backgroundColor: '#FF8D91',
  },
  blueBubble: {
    position: 'absolute',
    bottom: '25%',
    left: '20%',
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#0DB5FB',
  },
  greenBubble: {
    position: 'absolute',
    bottom: '17%',
    right: '17%',
    width: 102,
    height: 102,
    borderRadius: 50,
    backgroundColor: '#86F2BE',
  },
});

export default styles;
