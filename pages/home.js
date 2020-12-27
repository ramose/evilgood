import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
  ScrollView,
} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
import mainStyle from '../styles/mainstyle.js';
import data from '../assets/data.json';
import {useState} from 'react';
import MaskedView from '@react-native-community/masked-view';
// import MaskedView from '@react-native-masked-view/masked-view';

export default function Home() {
  const [evilValue, setEvilValue] = useState('95%');
  const [goodValue, setGoodValue] = useState('5%');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{padding: 20}}>
        <Header />
        <TimeMenus evil={evilValue} good={goodValue} />
      </ScrollView>
    </SafeAreaView>
  );
}

export function Header() {
  return (
    <View style={{marginBottom: 40}}>
      <Text style={{marginBottom: 20}}>Dec, 20 2020</Text>
      <View style={{flexDirection: 'row'}}>
        <Image source={require('../assets/dashboard/user.png')} />
        <View style={{paddingLeft: 10, justifyContent: 'center'}}>
          <Text style={mainStyle.title2}>Hello, {data.username}</Text>
          <Text>Welcome Back</Text>
        </View>
      </View>
    </View>
  );
}

const TimeMenus = (props) => {
  return (
    <View>
      <Text style={mainStyle.title1}>You Are</Text>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <ScrollView horizontal={true}>
          <Button color="black" title="Today" onPress={() => {}} />
          <Button color="black" title="This Week" />
          <Button color="black" title="This Month" />
          <Button color="black" title="This Year" />
          <Button color="black" title="All Time" />
        </ScrollView>
      </View>

      <MaskedView
       maskElement={
         <View style={{
          backgroundColor: 'red',
          width: props.evil,
          height: 100,
          borderRadius:30,
          width:"100%",
          justifyContent: 'center',
          paddingLeft: 20,
         }}/>
       }>
      <Bar evil={props.evil} good={props.good}/>
      </MaskedView>
      
    </View>
    
  );
};

const Bar = (props) => {
  return (
    <View style={{flexDirection: 'row', borderRadius: 20}}>
      <View
        style={{
          backgroundColor: 'red',
          width: props.evil,
          height: 100,
          // borderTopLeftRadius: 30,
          // borderBottomLeftRadius: 30,
          justifyContent: 'center',
          paddingLeft: 20,
        }}>
        <View
          style={{
            position: 'absolute',
            zIndex: 10,
            left: 10,
            justifyContent: 'center',
          }}>
          <Text style={mainStyle.bigtitle1}>{props.evil}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../assets/dashboard/lovew.png')} />
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                paddingLeft: 5,
              }}>
              Evil
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#7EBE35',
          width: props.good,
          // height: 100,
          // borderTopRightRadius: 30,
          // borderBottomRightRadius: 30,
          justifyContent: 'center',
          paddingRight: 20,
        }}></View>
      <View
        style={{
          position: 'absolute',
          zIndex: 10,
          right: 10,
          justifyContent: 'center',
          height: 100,
        }}>
        <Text style={mainStyle.bigtitle1}>{props.good}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              paddingRight: 5,
            }}>
            Good
          </Text>
          <Image source={require('../assets/dashboard/angelw.png')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    color: 'black',
  },
});
