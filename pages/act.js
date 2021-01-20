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
  Switch,
} from 'react-native';

import mainStyle from '../styles/mainstyle.js';
import {useForm, Controller} from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from '../components/datetimepicker';
import {useState} from 'react';
import Slider from '@react-native-community/slider';

export default function Act() {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);
  const [actState, setActState] = useState('good');

  // DatePicker
  const [date, setDate] = useState(new Date(1598051730000));

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    // const currentDate = selectedDate || date;
    // setShow(Platform.OS === 'ios');
    // setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  //

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setActState(isEnabled ? "good" : "bad")
  };

  return (
    <SafeAreaView>
      <View style={styles.layer0}>
        <Image style={isEnabled ? styles.imgEvil : styles.imgGood} source={isEnabled ? require('../assets/evil.png') : require('../assets/angel.png')} />
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
                  placeholder="what you did?"
                  style={styles.inputArea}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  multiline={true}
                />
              )}
              name="act"
              defaultValue=""
            />

            {/* <DatePicker
              date={date}
              onClose={(date) => {
                if (date && Platform.OS !== 'iOS') {
                  this.setState({showDatePicker: false, date: moment(date)});
                } else {
                  this.setState({showDatePicker: false});
                }
              }}
              onChange={(d) => {
                this.setState({date: moment(d)});
              }}
            /> */}

            {
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                style={{marginBottom: 20}}
              />
            }
            {/* <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <TouchableOpacity onPress={showDatepicker}>
                  <TextInput
                    pointerEvents="none"
                    placeholder="when?"
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                  />
                </TouchableOpacity>
              )}
              name="actTime"
              rules={{required: true}}
              defaultValue=""
            /> */}
            {/* {errors.username && <Text>This is required.</Text>} */}
            {errors.username}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}>
                <Text>Is it bad one?</Text>
              <Switch
                trackColor={{false: '#ff0000', true: 'red'}}
                thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                ios_backgroundColor="#cccccc"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{margin: 5}}
              />
              <Text style={{color: isEnabled ? 'black' : 'gray'}}>Yes</Text>
            </View>

            <View style={{marginTop:20, marginBottom:20}}>
            <Text>How {actState} is it?</Text>
              <Slider
                style={{
                  width: Dimensions.get('screen').width * 0.8,
                  height: 40,
                }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#7E108A"
                maximumTrackTintColor="#E7DBE9"
              />
            </View>

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
    // height: Dimensions.get('screen').height * 0.6,
    borderRadius: 20,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom:20
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
  imgEvil: {
    // position: 'absolute',
    // width: 300,
    // right: 0 - Dimensions.get('window').width / 2 + 150,
    top: -150,
    // zIndex: 1,
  },
  imgGood: {
    // position: 'absolute',
    // width: 300,
    // right: 0 - Dimensions.get('window').width / 2 + 150,
    top: -50,
    right:-40
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
    height: 100,
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
