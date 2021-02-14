import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 22,
  },
  input: {
    fontSize: 24,
    color: '#fff',
    marginTop: 12,
    textAlign: 'center',
  },
});

export default styles;
