import { StyleSheet } from 'react-native'
import { colors } from '../../theme/colors'
export const styles = StyleSheet.create({
  container: {
    marginTop: 184,
    marginHorizontal: 20,

    justifyContent: 'center',

    alignContent: 'space-around',
    alignItems: 'center',
  },
  subContainer: {
    gap: 8,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    marginTop:14.05,
    height: 154,
    width: 154,
  },
  detailContainer: {
    marginHorizontal: 4,
    gap: 8,
  },
  details: {
    fontFamily:"Fraunces",
    fontSize: 24,
    lineHeight: 32.4,
    color: '#454545',
    textAlign: 'center',
  },
  subDetails: {
    fontFamily:"Quicksand-medium",
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: colors.NoNotificationCardSubDetail,
    textAlign: 'center',
  },
})
