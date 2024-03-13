import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
export const styles = StyleSheet.create({
    container: {
      paddingVertical: 17,
      paddingHorizontal: 20,
      borderBottomWidth: 0.7,
      borderBottomColor: colors.NotificationCardContainerBorder,
      gap: 4,
    },
    subContainer: {
      gap: 20,
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'space-around',
    },
    icon: {
      width: 48,
      height: 48,
      marginLeft:20,
      resizeMode:'contain',
    },
    detailsContainer: {
      marginRight:8,
      flex:1,
      justifyContent: 'center',
      alignContent: 'center',
    },
    details: {
      fontFamily: 'Quicksand',
    fontSize: 14,
    lineHeight: 16.8,
    textAlign: 'left',
      color: '#000000',
    },
    subDetailsContainer: {
      marginHorizontal:20,
    },
    subDetails: {
      fontSize: 12,
      fontWeight: '500',
      lineHeight: 18,
      marginLeft:76,
      color: colors.NotificationCardSubDetail,
    },
  });