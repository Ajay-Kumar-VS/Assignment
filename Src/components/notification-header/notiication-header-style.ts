import { StyleSheet } from 'react-native'
import { colors } from '../../theme/colors'
export const styles = StyleSheet.create({
  topNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-between',
    paddingHorizontal: 24,
    gap: 16,
  },
  NotificationHeading: {
    fontFamily: 'Fraunces',
    marginHorizontal: 64,
    fontSize: 18,
    lineHeight: 25.2,
    textAlign: 'center',
    color: colors.NotificationHeading,
  },
  Icon: {
    height: 24,
    width: 24,
  },
})
