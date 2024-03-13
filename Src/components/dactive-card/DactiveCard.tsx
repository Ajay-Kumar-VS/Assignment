import React from 'react'
import { View, Text, ImageBackground, } from 'react-native'


import Button from '../dactive-card-buttons/Button'

import { styles } from './dactive-card-style'


  interface IDActiveCard {
    item: {
      title: string
      img: any
    }
    color: string
  }


const DactiveCard = (props:IDActiveCard) => {
  const { item, color } = props
  const { title, img } = item

  return (
    <ImageBackground source={img} style={styles.cardBackground}>
      <View style={styles.headingContainer}>
        <Text style={[styles.heading, { color: color }]}>{title}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button time={2} detail={'min'} />
        <Button time={4} detail={'min'} />

        <Button time={8} detail={'min'} />
      </View>
    </ImageBackground>
  )
}

export default DactiveCard
