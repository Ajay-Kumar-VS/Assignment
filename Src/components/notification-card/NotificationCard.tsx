import moment from 'moment';
import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './notification-card-style'

import { formatDistanceToNow } from 'date-fns';
const NotificationCard = ({item}: any) => {
  const {img, readStatus, details, timeStamp} = item;
const timeDetails = moment(timeStamp).fromNow();
// console.log(moment(Date.now()-400000).fromNow())
  return (
    <View
      style={[styles.container, !readStatus && {backgroundColor: '#F1FCFA'}]}>
      <View style={styles.subContainer}>
        <Image source={img} style={styles.icon} />
        <View style={styles.detailsContainer}>
          <Text style={styles.details}>{details}</Text>
        </View>
      </View>
      <View style={styles.subDetailsContainer}>
        <Text style={styles.subDetails}>{timeDetails}</Text>
      </View>
    </View>
  );
};


export default NotificationCard;
