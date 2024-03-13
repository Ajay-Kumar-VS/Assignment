import { View, Text, StatusBar, FlatList } from 'react-native'
import React from 'react'

const focus = require('../../assets/images/focus.png')
const follow = require('../../assets/images/follow.png')
const outerRing = require('../../assets/images/outerRing.png')
const Scan = require('../../assets/images/scan.png')
const Sqaure = require('../../assets/images/sqaure.png')

import DactiveCard from '../../components/dactive-card/DactiveCard'

import styles from './d-active-style'

interface Idata {
  title: string
  img: any
}
const data: Idata[] = [
  {
    title: 'Focus',
    img: focus,
  },

  {
    title: 'Outer Ring',
    img: outerRing,
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
  {
    title: 'Follow',
    img: follow,
  },
]

const DActive = () => {
  const colorsDetails = {
    focus: '#176E6D',
    ['Outer Ring']: '#D72B6A',
    Follow: '#292F36',
    Scan: '#B96204',
    Square: '#176E6D',
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.DactiveHeading}>D-active</Text>
        </View>
        <View style={styles.flatList}>
          <FlatList
            data={data}
            renderItem={({ item }) => <DactiveCard item={item} color={colorsDetails[item.title]} />}
            // ItemSeparatorComponent={<Text></Text>}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  )
}
export default DActive
