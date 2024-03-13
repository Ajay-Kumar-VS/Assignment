import { StyleSheet } from 'react-native'
import { colors } from '../../theme/colors'

export const styles = StyleSheet.create({
  timeText: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.02,
    color: colors.ButtonTimeText,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
    paddingVertical: 12,
    gap: 8,
    backgroundColor: colors.ButtonBackGround,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    shadowColor: colors.ButtonShadow,
    shadowOpacity: 0.1,
    elevation: 3,
  },
})
