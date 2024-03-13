import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from './button-style'

interface Ibutton {
  time: number
  detail: string
}

const Button = ({ time, detail }: Ibutton) => {
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
