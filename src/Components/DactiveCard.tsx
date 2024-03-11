import {View, Text, StyleSheet, ImageBackground, Button, Pressable} from 'react-native';
import React from 'react';


const DactiveCard = ({item}:any) => {
  const {title,img}=item

  return (
    <ImageBackground source={img} style={styles.card}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>{title}</Text>
      </View>
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
const styles = StyleSheet.create({
  timeText:{
    fontWeight:'600',
    fontSize:12,
    lineHeight:18,
    letterSpacing:0.02,
    color:'#292F36'
  },
    button:{
        width:93,
        height:36,

        alignItems:'center',
        paddingHorizontal:16,
        borderRadius:8,
        paddingVertical:8,
        gap:8,
        backgroundColor:'#FFFFFF',
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        shadowColor: '#4B4B4B',
        shadowOpacity: 0.1,
        elevation:3,
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'center',

        paddingHorizontal: 16,
        paddingVertical: 8,
        gap:12
    }
    ,
  heading: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 25.2,
  },
  headingContainer: {

    alignItems: 'center',
    // backgroundColor: 'red',
    // width: 335,
    // height: 41,
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 12,
  },
  card: {
    backgroundColor: 'grey',

    justifyContent: 'space-between',
    borderRadius: 16,
    width: 335,
    height: 148,



    marginBottom: 20,
    overflow:'hidden'
  },
});

export default DactiveCard;
