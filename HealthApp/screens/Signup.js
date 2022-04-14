import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Select } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import hex_sha1 from '../functions/SHA1';

export default function Signup({ navigation }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [sex, setSex] = useState("")
    const [role, setRole] = useState("")
    
    function RegistrationHandler() {
        var api = 'http://52.70.229.148:8000/users/'

        var fullName = name.split(" ")
        var firstName = fullName[0]
        var lastName = fullName[1]
    
        var data = {
            "userID": hex_sha1(email),
            "firstName": firstName,
            "lastName": lastName,
            "DoB": "_",
            "address": "_",
            "email": email,
            "pcp": "_",
            "sex": sex,
            "role": role
        }
        try {
          fetch(api, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'content-Type': 'application/json'
              },
              body: JSON.stringify(data)
          })
        } catch (error) {
          console.log(error)
          return;
        }
    }

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.Middle}>
          <Text style={styles.LoginText}>Signup</Text>
        </View>
        <View style={styles.text2}>
          <Text>Already have account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")} ><Text style={styles.signupText}> Login </Text></TouchableOpacity>
        </View>

        {/* Name Input */}
        <View style={styles.buttonStyle}>
          
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="user-secret" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              placeholder="Name"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
              value={name}
              onChangeText={setName}
            />
          </View>
        </View>

        {/* Email Input Field */}
        <View style={styles.buttonStyleX}>
          
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as={<MaterialCommunityIcons name="email" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              placeholder="Email"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        {/* Sex Input Field */}
        <View style={styles.buttonStyleX}>
          
          <View style={styles.emailInput}>
            <Select selectedValue={sex}
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="key" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              placeholder="Sex"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
              onValueChange={itemValue => setSex(itemValue)}>
              <Select.Item label="Male" value="M" />
              <Select.Item label="Female" value="F" />
              <Select.Item label="Other" value="O" />
            </Select>
          </View>
        </View>

        {/* Role Input Field */}
        <View style={styles.buttonStyleX}>
          
          <View style={styles.emailInput}>
            <Select selectedValue={role}
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="key" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              placeholder="Role"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
              onValueChange={itemValue => setRole(itemValue)}>
              <Select.Item label="Patient" value="P" />
              <Select.Item label="Provider" value="D" />
            </Select>
          </View>
        </View>

        {/* Button */}
        <View style={styles.buttonStyle}>
          <Button style={styles.buttonDesign} onPress={RegistrationHandler()}>
              REGISTER NOW
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
    marginRight:15
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