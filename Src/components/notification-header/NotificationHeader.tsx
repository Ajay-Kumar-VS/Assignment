import { View, Text,  Image } from 'react-native'
import React from 'react'


const back =require('../../assets/icons/back.png')
const settings =require('../../assets/icons/settings.png')

import {styles} from './notiication-header-style'

const NotificationTopNav = () => {
  return (
    <View style={styles.topNav}>
        <Image source={back} style={[styles.Icon,{marginRight:16}]}/>
       

        <Text style={styles.NotificationHeading}>Notifications</Text>
        <Image source={settings} style={[styles.Icon,{paddingLeft:7.25}]}/>

        
    </View>
  )
}


export default NotificationTopNav