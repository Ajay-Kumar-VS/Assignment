import { StyleSheet } from 'react-native'
import { colors } from '../../theme/colors'
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    marginHorizontal: 20,
  },
  DactiveHeading: {
    fontFamily: 'Fraunces-Bold',
    fontSize: 18,

    lineHeight: 25.2,
    textAlign: 'center',
    color: colors.DactiveHeading,
  },
  header: {
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  flatList: {
    marginTop: 24,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 35,
    gap: 20,
  },
})

export default styles
