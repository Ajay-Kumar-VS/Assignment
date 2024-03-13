import { StyleSheet } from 'react-native'
import { colors } from '../../theme/colors'
export const styles = StyleSheet.create({
  linearGradientBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    backgroundColor:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.56) 0%, rgba(255, 255, 255, 0.124249) 87.92%, rgba(255, 255, 255, 0) 100%)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 12,
  },
  heading: {
    fontFamily: 'Fraunces',
    fontSize: 18,
    lineHeight: 25.2,
  },
  headingContainer: {
    backgroundColor:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.56) 0%, rgba(255, 255, 255, 0.124249) 87.92%, rgba(255, 255, 255, 0) 100%)',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 12,
  },
  cardBackground: {
    backgroundColor: 'grey',
    justifyContent: 'space-between',
    borderRadius: 16,
    width: 335,
    height: 148,
    marginBottom: 20,
    overflow: 'hidden',
  },
})
