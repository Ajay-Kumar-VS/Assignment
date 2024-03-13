import React from 'react'
import { View, Text, StatusBar, Image, SafeAreaView, FlatList } from 'react-native'

const focus = require('../../assets/images/focus.png')
const follow = require('../../assets/images/follow.png')
const outerRing = require('../../assets/images/outerRing.png')
const Scan = require('../../assets/images/scan.png')
const Square = require('../../assets/images/square.png')

import DactiveCard from '../../components/dactive-card/DactiveCard'
import styles from './d-active-style'
interface Idata {
  title: string
  img: any
}
const data :Idata[] = [
  {
    title: 'Outer Ring',
    img: outerRing,
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
    title: 'Scan',
    img: Scan,
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
    img: Square,
  },
  {
    title: 'Focus',
    img: focus,
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
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
        <View style={styles.main}>
          <View style={styles.header}>
            <Text style={styles.DactiveHeading}>D-active</Text>
          </View>
          <View style={styles.flatList}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <DactiveCard item={item} color={colorsDetails[item.title]} />
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </View>
  )
}
export default DActive
