import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import NotificationTopNav from '../../Components/NotificationTopNav';
import NoNotification from '../../Components/NoNotification';
import NotificationCard from '../../Components/NotificationCard';
const lotus = require('../../Assets/Icons/lotus.png');
const one = require('../../Assets/Icons/one.png');
const clock = require('../../Assets/Icons/clock.png');


const details = [
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
    img: lotus,
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
    img: lotus,
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
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  NotificationTopNav: {
    // marginTop:44,

    // backgroundColor: 'red',
    gap:16,
    marginLeft: 0,
    // backgroundColor: 'yellow',
    paddingHorizontal: 24,
    paddingVertical: 16,
    
    
  },
  FlatList: {
    flex:1,
    // marginTop:116,
    
    // backgroundColor: 'grey',

    // flex:9,
    // backgroundColor:'red',
    // height:520
    // height:700
  },
});
export default Notification;
