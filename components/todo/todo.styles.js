import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 75,
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
  leftAction: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 55,
    height: 55,
  },
  actionText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '600',
  },
});

export default styles;
