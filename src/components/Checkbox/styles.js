import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  box: {
    marginTop: 1,
    height: 16,
    width: 16,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 2,
    width: 6,
    height: 10,
    borderBottomColor: 'white',
    borderRightColor: 'white',
    borderBottomWidth: 2,
    borderRightWidth: 2,
    transform: [
      {
        rotate: '45deg',
      },
    ],
  },
  label: {
    marginLeft: 10,
    // flex: 1,
  },
});

export default styles;
