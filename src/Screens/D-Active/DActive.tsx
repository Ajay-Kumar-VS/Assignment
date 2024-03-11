import {
  View,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';

import styles from './DActive-style';
import DactiveCard from '../../Components/DactiveCard';
const focus = require('../../Assets/Images/Focus.png');
const follow = require('../../Assets/Images/follow.png');
const outerRing = require('../../Assets/Images/outerRing.png');
const Scan = require('../../Assets/Images/Scan.png');
const Sqaure = require('../../Assets/Images/Sqaure.png');

const data = [
  {
    title: 'Focus',
    img: focus,
  },
  {
    title: 'Focus',
    img: focus,
  },
  {
    title: 'Follow',
    img: follow,
  },
  {
    title: 'Focus',
    img: focus,
  },
  {
    title: 'Outer Ring',
    img: outerRing,
  },
  {
    title: 'Focus',
    img: focus,
  },
  {
    title: 'Focus',
    img: focus,
  },
  {
    title: 'Scan',
    img: Scan,
  },
  {
    title: 'Square',
    img: Sqaure,
  },
  {
    title: 'Focus',
    img: focus,
  },
];

const DActive = () => {
  return (
    <View style={{flex:1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View style={styles.main}>
        <View style={styles.topNav}>
          <Text style={styles.DactiveHeading}>D-active</Text>
        </View>
        <View style={styles.flatList}>
          <FlatList
            data={data}
            renderItem={({item}) => <DactiveCard item={item} />}
            // ItemSeparatorComponent={<Text></Text>}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};
export default DActive;
