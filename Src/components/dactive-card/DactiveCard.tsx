import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import Button from '../dactive-card-buttons/DactiveCardButton'
import { styles } from './dactive-card-style'

interface IDActiveCardProp {
  item: {
    title: string
    img: any
  }
  color: string
}

const DactiveCard = (props: IDActiveCardProp) => {
  const { item, color } = props
  const { title, img } = item

  return (
    <View style={styles.container}>
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
    </View>
  )
}

export default DactiveCard
