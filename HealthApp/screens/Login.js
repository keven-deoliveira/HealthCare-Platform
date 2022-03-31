import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button } from 'native-base';
import * as Google from 'expo-auth-session/providers/google'

export default function Login({ navigation }) { 
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '833113095644-ciah7c3mgv07h6ri46fb48abfagoeo0q.apps.googleusercontent.com'
  });

  var access_token;

  React.useEffect(() => {
    if (response?.type === 'success') {
      access_token = response.authentication.accessToken;
      checkExistingUser();
    }
  }, [response]);

  async function checkExistingUser() {
    const googleUser = await fetchUserGoogleInfo(access_token);
    var googleEmail = googleUser.email;

    var userList = await fetchUserList();
    for (const user of userList) {
      if (user.email == googleEmail) {
        navigation.navigate("Home", user);
        return;
      }
    }
    navigation.navigate("Signup");
  }

  async function fetchUserGoogleInfo(token) {
    const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    });
  
    return await response.json();
  }

  async function fetchUserList() {
      const response = await fetch ('http://52.70.229.148:8000/users/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application.json'
      },
    });

    return await response.json()
  }
  
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.Middle}>
          <Text style={styles.LoginText}>Login</Text>
        </View>
        <View style={styles.text2}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")} ><Text style={styles.signupText}> Sign up</Text></TouchableOpacity>
        </View>

        {/* Button */}
        <View style={styles.buttonStyle}>
          <Button
            style={styles.buttonDesign}
            disabled={!request}
            title="Login"
            onPress={() => {promptAsync();}}> LOGIN WITH GOOGLE
          </Button>
        </View>
      </View>
    </NativeBaseProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  LoginText: {
    marginTop:100,
    fontSize:30,
    fontWeight:'bold',
  },
  Middle:{
    alignItems:'center',
    justifyContent:'center',
  },
  text2:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:5
  },
  signupText:{
    fontWeight:'bold'
  },
  emailField:{
    marginTop:30,
    marginLeft:15
  },
  emailInput:{
    marginTop:10,
    marginRight:5
  },
  buttonStyle:{
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    alignItems:'center',
    justifyContent: 'center'
  },
  buttonStyleX:{
    marginTop:12,
    marginLeft:15,
    marginRight:15
  },
  buttonDesign:{
    backgroundColor:'#026efd'
  },
  lineStyle:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    alignItems:'center'
  },
  imageStyle:{
    width:80,
    height:80,
    marginLeft:20,
  },
  boxStyle:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    justifyContent:'space-around'
  },
});