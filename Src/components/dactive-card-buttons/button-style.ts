import { StyleSheet } from 'react-native'
import { colors } from '../../theme/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen'

export const styles = StyleSheet.create({
  timeText: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.02,
    color: colors.ButtonTimeText,
  },
  button: {
    width: 93,
    height: 36,
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
    paddingVertical: 8,
    gap: 8,
    backgroundColor: colors.ButtonBackGround,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    shadowColor: '#4B4B4B',
    shadowOpacity: 0.1,
    elevation: 3,
  },
})
