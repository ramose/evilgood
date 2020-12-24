import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Intro({navigation}) {
  return (
    <LinearGradient colors={['#5313B4', '#fff']} style={styles.linearGradient}>
      <Image style={styles.imgAngel} source={require('../assets/angel.png')} />
      <Image style={styles.imgEvil} source={require('../assets/evil.png')} />

      <Text
        style={{
          fontSize: 50,
          color: 'white',
          fontWeight: 'bold',
          paddingBottom: 100,
          zIndex:2
        }}>
        Good vs Evil
      </Text>
      <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
        Track your acts. Good or Bad
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          fontWeight: 'bold',
          paddingBottom: 50,
        }}>
        It's up to you
      </Text>
      <Pressable style={styles.button} onPressOut={()=>{
        navigation.replace("login")
      }}>
        <Text style={styles.buttonText}>Let's Get Started</Text>
      </Pressable>

      <View style={{padding: 80}} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: '#5C20B8',
    padding: 10,
    borderRadius: 50,
    width: Dimensions.get('window').width * 0.7,
  },
  imgAngel: {
    position: 'absolute',
    width: 300,
    right: 0 - Dimensions.get('window').width / 2 + 150,
    top: 0,
    zIndex: 1,
  },
  imgEvil: {
    position: 'absolute',
    width: 480,
    left: Dimensions.get('window').width / 2 - 300,
    top: -100,
    zIndex: 0,
  },
});
