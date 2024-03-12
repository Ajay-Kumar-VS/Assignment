import {View, Text, StyleSheet, ImageBackground, Button, Pressable} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import {styles} from './dactive-card-style'

const DactiveCard = ({item,color}:any) => {
  const {title,img}=item

  return (
    <ImageBackground source={img} style={styles.card}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.56)', 'rgba(255, 255, 255, 0.124249)', 'rgba(255, 255, 255, 0)']}
        
      >
      <View style={styles.headingContainer}>
      
        <Text style={[styles.heading,{color:color}]}>{title}</Text>
      </View>
      </LinearGradient>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
            <Text style={styles.timeText} >2min</Text>
        </Pressable>
        <Pressable  style={styles.button}>
            <Text style={styles.timeText} >4min</Text>
        </Pressable>
        <Pressable style={styles.button}>
            <Text style={styles.timeText} >8min</Text>
        </Pressable>
        
        
      </View>
    </ImageBackground>
  );
};


export default DactiveCard;
