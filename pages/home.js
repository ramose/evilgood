import React, {useEffect} from 'react';
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
import { FlatList } from 'react-native-gesture-handler';
// import MaskedView from '@react-native-masked-view/masked-view';

export default function Home() {
  const [evilValue, setEvilValue] = useState(data.summary[0].evil);
  const [goodValue, setGoodValue] = useState(data.summary[0].good);

  // useEffect(()=>{
  //   setEvilValue(data.summary[0].evil+"%");
  //   setGoodValue(data.summary[0].good+"%");
  // })

  updateStatus = (index) => {
    console.log("index:"+index);
    console.log("evil:",data.summary[index].evil+"%");
    setEvilValue(data.summary[index].evil);
    setGoodValue(data.summary[index].good);
    // console.log("index:"+index);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 20}}>
        <Header />
        <TimeMenus evil={evilValue} good={goodValue} />
      </View>
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
          <Button color="black" title="Today" onPress={()=>updateStatus(0)}/>
          <Button color="black" title="This Week" onPress={()=>updateStatus(1)}/>
          <Button color="black" title="This Month" onPress={()=>updateStatus(2)}/>
          <Button color="black" title="This Year" onPress={()=>updateStatus(3)}/>
          <Button color="black" title="All Time" onPress={()=>updateStatus(4)}/>
        </ScrollView>
      </View>

      <MaskedView
        maskElement={
          <View
            style={{
              backgroundColor: 'red',
              width: "100%",
              height: 100,
              borderRadius: 30,
              width: '100%',
              justifyContent: 'center',
              paddingLeft: 20,
            }}
          />
        }>
        <Bar evil={props.evil} good={props.good} />
      </MaskedView>
        <View style={{marginTop:40}}/>
      <Text style={mainStyle.title1}>Your Latest Acts</Text>
      <View style={{marginTop:20}}/>
      {/** List Latest Acts */}
      <FlatList
      data={data.acts}
      renderItem={({item})=>{
        return(
          <View style={styles.cellContainer}>
            <View style={{flex:1}}>
            <Text style={{marginBottom:5}}>{item.date}</Text>
            <Text>{item.act}</Text>
            </View>
            {item.good ? <Image source={require("../assets/dashboard/cell-good.png")}/> : <Image source={require("../assets/dashboard/cell-evil.png")}/>}
            
          </View>
          
        )
      }}
      />
    </View>
  );
};

const Bar = (props) => {
  return (
    <View style={{flexDirection: 'row', borderRadius: 20}}>
      <View
        style={{
          backgroundColor: 'red',
          width: props.evil+"%",
          height: 100,
          justifyContent: 'center',
          paddingLeft: 20,
        }}>
        
      </View>
      <View
        style={{
          backgroundColor: '#7EBE35',
          width: props.good+"%",
          justifyContent: 'center',
          paddingRight: 20,
        }}></View>
        <View
          style={{
            position: 'absolute',
            zIndex: 11,
            left: 10,
            justifyContent: 'center',
            height:100
          }}>
          <Text style={{fontSize: 20 + (40/(100/props.evil)), color:"white", fontWeight:"bold"}}>{props.evil}%</Text>
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
      <View
        style={{
          position: 'absolute',
          zIndex: 10,
          right: 10,
          justifyContent: 'center',
          height: 100,
        }}>
        <Text style={{fontSize: 20 + (40/(100/props.good)), color:"white", fontWeight:"bold"}}>{props.good}%</Text>
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
  cellContainer:{
    flexDirection:"row",
    padding:20,
    backgroundColor:"#F2F2F2",
    margin:10,
    borderRadius:20,
    alignItems:"center"
  },

});
