import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  Dimensions,
  SafeAreaView,
  Image,
  Platform,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import mainStyle from '../styles/mainstyle.js';
import {useForm, Controller} from 'react-hook-form';

export default function Act() {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <SafeAreaView>
      <View style={styles.layer0}>
        <Image style={styles.img} source={require('../assets/evil.png')} />
      </View>

      <View style={styles.layer1}>
        <Text style={{marginBottom: 10}}>Dec, 20 2020</Text>
        <Text style={mainStyle.title2}>Add New Act</Text>
      </View>
      <View style={styles.layer2}>
        <View
          style={Platform.OS === 'ios' ? styles.formIos : styles.formAndroid}>
          <View>
            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <TextInput
                  placeholder="username"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  
                />
              )}
              name="username"
              rules={{required: true}}
              defaultValue=""
            />
            {/* {errors.username && <Text>This is required.</Text>} */}
            {errors.username}

            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <TextInput
                  placeholder="password"
                  style={styles.inputArea}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  multiline={true}
                />
              )}
              name="password"
              defaultValue=""
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.replace('tabs');
              }}>
              <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layer0: {
    flex: 1,
    // backgroundColor: 'blue',
    // width: 300,
    // height: 300,
    position: 'absolute',
  },
  layer1: {
    position: 'absolute',
    zIndex: 1,
    // backgroundColor: 'green',
    paddingTop: 60,
    paddingLeft: 20,
  },
  formIos: {
    //   position:'absolute',
    // zIndex: 2,
    backgroundColor: 'white',
    width: '100%',
    height: Dimensions.get('screen').height * 0.6,
    borderRadius: 20,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems:'center',
    paddingTop:20
  },
  formAndroid: {
    //   position:'absolute',
    // zIndex: 2,
    backgroundColor: 'orange',
    width: '100%',
    height: 100,
    borderRadius: 20,
    elevation: 3,
  },
  layer2: {
    position: 'absolute',
    //   top:0,
    zIndex: 2,
    //   backgroundColor:'grey',
    padding: 20,
    width: '100%',
    height: Dimensions.get('screen').height - 100,
    justifyContent: 'flex-end',
  },
  img: {
    // position: 'absolute',
    // width: 300,
    // right: 0 - Dimensions.get('window').width / 2 + 150,
    top: -150,
    // zIndex: 1,
  },
  input: {
    padding: 10,
    borderColor: 'gray',
    // borderWidth: 1,
    borderRadius: 5,
    width: Dimensions.get('window').width * 0.8,
    marginBottom: 12,
    fontSize: 18,
    backgroundColor: '#f3f3f3',
  },
  inputArea: {
    padding: 10,
    borderColor: 'gray',
    // borderWidth: 1,
    borderRadius: 5,
    width: Dimensions.get('window').width * 0.8,
    height:100,
    marginBottom: 12,
    fontSize: 18,
    backgroundColor: '#f3f3f3',
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
    padding: 5,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.8,
  },
});
