import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './notificationCard-style'

const NotificationCard = ({item}: any) => {
  const {img, readStatus, details, time} = item;
  
 
  return (
    <View
      style={[styles.constainer, !readStatus && {backgroundColor: '#F1FCFA'}]}>
      <View style={styles.subContainer}>
        <Image source={img} style={styles.icon} />
        <View style={styles.detailsContainer}>
          <Text style={styles.details}>{details}</Text>
        </View>
      </View>
      <View style={styles.subDetailsContainer}>
        <Text style={styles.subDetails}>{time} ago</Text>
      </View>
    </View>
  );
};


export default NotificationCard;
