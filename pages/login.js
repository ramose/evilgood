import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useForm, Controller} from 'react-hook-form';

export default function Login() {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <LinearGradient colors={['#5313B4', '#fff']} style={styles.linearGradient}>
      <Image style={styles.imgAngel} source={require('../assets/angel.png')} />
      <Image style={styles.imgEvil} source={require('../assets/evil.png')} />

      <Text
        style={{
          fontSize: 50,
          color: 'white',
          fontWeight: 'bold',
          top: 50,
          position: 'absolute',
          zIndex: 2,
        }}>
        Good vs Evil
      </Text>

      <View
        style={{
          width: Dimensions.get('window').width,
          padding: 20,
          // height:400,
          backgroundColor: 'white',
          position: 'absolute',
          zIndex: 3,
          bottom: 0,
          alignItems: 'center',
          paddingBottom: 80,
          paddingTop: 50,
        }}>
        <Text style={{margin: 20}}>Already have an account? Sign In</Text>

        <View style={styles.container}>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="firstName"
            rules={{required: true}}
            defaultValue=""
          />
          {errors.firstName && <Text>This is required.</Text>}

          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="lastName"
            defaultValue=""
          />
          {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
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
    padding: 5,
    borderRadius: 10,
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
  input: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: Dimensions.get('window').width * 0.7,
    marginBottom: 10,
    fontSize: 18,
  },
});
