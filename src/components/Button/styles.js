import { StyleSheet } from 'react-native';
import STYLES from '@src/styles';

const styles = StyleSheet.create({
  default: {
    height: 50,
    borderRadius: 10,
  },
  button: {
    height: STYLES.buttonHeight,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primary: {
    backgroundColor: 'black',
  },
  text: {
    fontSize: STYLES.buttonFontSize,
    color: 'black',
  },
  primaryText: {
    color: 'white',
  },
  icon: {
    paddingRight: 10,
  },
});

export default styles;
