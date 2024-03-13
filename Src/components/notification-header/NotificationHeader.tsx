import React from 'react'
import { View, Text, Image } from 'react-native'
const settings = require('../../assets/icons/settings.png')

import { styles } from './notiication-header-style'

const NotificationHeader = () => {
  return (
    <View style={styles.topNav}>
      <View style={styles.icon} />
      <Text style={styles.NotificationHeading}>Notifications</Text>
      <Image source={settings} style={[styles.icon, { paddingLeft: 7.25 }]} />
    </View>
  )
}

export default NotificationHeader
