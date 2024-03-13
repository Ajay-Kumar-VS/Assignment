import {
  View,
  FlatList,
  StatusBar,
} from 'react-native';
import React, { useState} from 'react';

const lotus = require('../../assets/icons/lotus.png');
const one = require('../../assets/icons/one.png');
const clock = require('../../assets/icons/clock.png');

import NotificationCard from '../../components/notification-card/NotificationCard';
import NoNotificationCard from '../../components/no-notification/NoNotificationCard';
import NotificationHeader from '../../components/notification-header/NotificationHeader';

import {styles} from './notification-style'

interface details{
  
    id: number
    img: any,
    readStatus: boolean,
    details:string
      
    timeStamp: number,
  
}
const details:details[] = [
  {
    id: 1,
    img: lotus,
    readStatus: false,
    details:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    timeStamp: 1667118800000,
  },
  {
    id: 2,
    img: lotus,
    readStatus: true,
    details:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    timeStamp: 1669998890900,
  },
  {
    id: 3,
    img: clock,
    readStatus: true,
    details:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    timeStamp: 1767558800000,
  },
  {
    id: 4,
    img: one,
    readStatus: false,
    details:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    timeStamp: 1646626800000,
  },
  {
    id: 5,
    img: lotus,
    readStatus: false,
    details:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    timeStamp: 1645935600000,
  },
  {
    id: 6,
    img: one,
    readStatus: true,
    details:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    timeStamp: 1644367600000,
  },
  {
    id: 7,
    img: lotus,
    readStatus: true,
    details:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    timeStamp: 2035702000000,
  },
  {
    id: 8,
    img: clock,
    readStatus: false,
    details:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    timeStamp: 1999431600000,
  },
]

const Notification = () => {
  const [data, setData] = useState(details);
 

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />

        <View style={styles.notificationHeader}>
          <NotificationHeader />
        </View>
        <View style={styles.FlatList}>
          <FlatList
            data={data}
            renderItem={({item}) => <NotificationCard item={item} />}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<View style={{flex:1}}><NoNotificationCard /></View>}
          />
        </View>

    </View>
  );
};

export default Notification;
