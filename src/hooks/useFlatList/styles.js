import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  footerContainer: {
    alignSelf: 'center',
  },
  loadmore: {
    fontSize: 13,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    fontFamily: 'Prompt-Bold',
  },
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
});

export default styles;
