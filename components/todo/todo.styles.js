import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 88,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: 12,
    color: '#fff',
    borderRadius: 50,
    marginRight: 12,
  },
  name: {
    fontSize: 18,
  },
  createdAt: {
    fontSize: 13,
    color: '#b3afaf',
  },
});

export default styles;
