import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    constainer: {
      // width:337,
      // height:104,
      // backgroundColor:'red',
      // marginHorizontal:20,
      // marginTop:284,
  
      paddingVertical: 17,
      paddingHorizontal: 20,
      borderBottomWidth: 0.7,
      borderBottomColor: '#E2E8EB',
      gap: 4,
  
      alignContent: 'space-around',
    },
    subContainer: {
     
      gap: 27,
      flexDirection: 'row',
  
      alignItems: 'center',
      alignContent: 'space-around',
    },
    icon: {
      width: 48,
      height: 48,
      paddingVertical: 25,
      paddingHorizontal: 30,
    },
    detailsContainer: {
      
      flex:1,
      justifyContent: 'center',
      alignContent: 'center',
  
    },
    details: {
  
      paddingHorizontal:5,
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 16.8,
      color: '#000000',
      textAlign: 'justify',
      alignItems: 'center',
    },
    subDetailsContainer: {
  
      paddingHorizontal: 86,
      gap: 8,
    },
    subDetails: {
      fontSize: 12,
      fontWeight: '500',
      lineHeight: 18,
      // letterSpacing: 0.02,
      marginLeft:12,
      color: '#4E5E6C',
    },
  });