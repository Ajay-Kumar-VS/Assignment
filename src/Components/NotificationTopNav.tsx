import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
const back =require('../Assets/Icons/back.png')
const settings =require('../Assets/Icons/settings.png')


const NotificationTopNav = () => {
  return (
    <View style={styles.topNav}>
        <Image source={back} style={[styles.Icon,{marginRight:16}]}/>
       

        <Text style={styles.NotificationHeading}>Notifications</Text>
        <Image source={settings} style={[styles.Icon,{paddingLeft:7.25}]}/>

        
    </View>
  )
}
const styles=StyleSheet.create({
    topNav:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

        alignContent:"space-between",
        
        
    //    flex:1,
        // paddingVertical:16,
        paddingHorizontal:24,
        gap:16,
        // backgroundColor:'grey',


    },
    NotificationHeading:{
        // marginVertical:15.5,
        marginHorizontal:64,
        //font 
        fontSize:18,
        fontWeight:'700',
        lineHeight:25.2,
        textAlign:'center',
        color:'#292F36',


    },
    Icon:{
        height:24,
        width:24
    },
    
    
})

export default NotificationTopNav