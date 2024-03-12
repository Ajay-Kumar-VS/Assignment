import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  DactiveHeading: {
    fontFamily:"Fraunces",
    fontSize: 18,

    lineHeight: 25.2,
    textAlign: 'center',
    color: '#292F36',
    // fontWeight: '700',
  },
  topNav: {
    marginTop:44,
    alignItems: 'center',

    gap: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  flatList: {

    marginTop: 24,
    marginLeft: 20,
    marginRight: 20,
    marginBottom:35,



    gap: 20,
  },
});

export default styles;
