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
import NoNotification from '../../components/no-notification/NoNotification';
import NotificationTopNav from '../../components/notification-header/NotificationHeader';

import {styles} from './Notification-style'

interface details{
  
    id: number
    img: any,
    readStatus: boolean,
    details:string
      
    time: string,
  
}
const details:details[] = [
  {
    id: 1,
    img: lotus,
    readStatus: false,
    details:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4min',
  },
  {
    id: 2,
    img: lotus,
    readStatus: true,
    details:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4min',
  },
  {
    id: 3,
    img: clock,
    readStatus: true,
    details:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4min',
  },
  {
    id: 4,
    img: one,
    readStatus: false,
    details:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4min',
  },
  {
    id: 5,
    img: lotus,
    readStatus: false,
    details:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4min',
  },
  {
    id: 6,
    img: one,
    readStatus: true,
    details:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4min',
  },
  {
    id: 7,
    img: lotus,
    readStatus: true,
    details:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4min',
  },
  {
    id: 8,
    img: clock,
    readStatus: false,
    details:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4min',
  },
]

const Notification = () => {
  const [data, setData] = useState(details);
  // async function getdata(){
  //   const res=await fetch ('https://65eedb47ead08fa78a4f1543.mockapi.io/notification/data')
  //   const data= await res.json()
  //   setData(data);
  // }
  // getdata();

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      {/* <View style={styles.container}> */}
        <View style={styles.NotificationTopNav}>
          <NotificationTopNav />
        </View>
        <View style={styles.FlatList}>
          <FlatList
            data={data}
            renderItem={({item}) => <NotificationCard item={item} />}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<View style={{flex:1}}><NoNotification /></View>}
          />
        </View>
      {/* </View> */}
    </View>
  );
};

export default Notification;
