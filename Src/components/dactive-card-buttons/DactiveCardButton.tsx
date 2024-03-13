import React from 'react'
import { Text, Pressable } from 'react-native'
import { styles } from './DactiveCardButton-style'

interface IButtonProp {
  time: number
  detail: string
}

const Button = ({ time, detail }: IButtonProp) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.timeText}>
        {time}
        {detail}
      </Text>
    </Pressable>
  )
}

export default Button
