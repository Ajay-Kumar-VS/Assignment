import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const noNotification = require('../../assets/icons/notificationBell.png')

import { styles } from './no-notification-card-style'

const NoNotificationCard = () => {
  return (
    <View style={styles.container}>
      <Image source={noNotification} style={styles.image} />
      <View style={styles.subContainer}>
        <View style={styles.detailContainer}>
          <Text style={styles.details}>No Notifications Yet!</Text>
        </View>

        <Text style={styles.subDetails}>
          You have no notifications right now.{'\n'}Come back later.
        </Text>
      </View>
    </View>
  )
}

export default NoNotificationCard
