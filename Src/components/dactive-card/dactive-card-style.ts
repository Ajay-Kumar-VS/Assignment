import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    linearGradientBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    timeText:{
      fontWeight:'600',
      fontSize:12,
      lineHeight:18,
      letterSpacing:0.02,
      color:'#292F36'
    },
      button:{
          width:93,
          height:36,
  
          alignItems:'center',
          paddingHorizontal:16,
          borderRadius:8,
          paddingVertical:8,
          gap:8,
          backgroundColor:'#FFFFFF',
          shadowOffset: { width: 0, height: 3 },
          shadowRadius: 6,
          shadowColor: '#4B4B4B',
          shadowOpacity: 0.1,
          elevation:3,
      },
      buttonContainer:{
          flexDirection:'row',
          justifyContent:'center',
  
          paddingHorizontal: 16,
          paddingVertical: 8,
          gap:12
      }
      ,
    heading: {
        fontFamily:"Fraunces",
    //   fontWeight: '700',
      fontSize: 18,
      lineHeight: 25.2,
    },
    headingContainer: {
    backgroundColor: 'linear-gradient(180deg, rgba(255, 255, 255, 0.56) 0%, rgba(255, 255, 255, 0.124249) 87.92%, rgba(255, 255, 255, 0) 1000%)',
        
      alignItems: 'center',
      // backgroundColor: 'red',
      // width: 335,
      // height: 41,
      paddingHorizontal: 16,
      paddingVertical: 8,
      gap: 12,
    },
    card: {
      backgroundColor: 'grey',
  
      justifyContent: 'space-between',
      borderRadius: 16,
      width: 335,
      height: 148,
  
  
  
      marginBottom: 20,
      overflow:'hidden'
    },
  });