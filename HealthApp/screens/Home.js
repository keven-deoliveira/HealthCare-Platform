import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NativeBaseProvider } from 'native-base';

export default function Home({ route, navigation }) {
    const user = route.params
    var userRoles = user.role

    const pcpList = []

    async function fetchUserList() {
        const response = await fetch ('http://52.70.229.148:8000/users/', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application.json'
        },
      });
  
      return await response.json();
    }
    
    // DOESNT WORK YET
    fetchUserList().then(userList => {
        for (const user of userList) {
            if ((user.role).find(e => e == "D")) {
                console.log(user)
                var name = String('Dr. ' + user.firstName + ' ' + user.lastName)
                pcpList.push(name)
            }
        }
    });

    // return doctor view if doctor is any of the roles
    if (userRoles.find(element => element == "D")) {
        return (
            <NativeBaseProvider>
                <View style={styles.container}>
                    <Text style={styles.header}>Hello, Dr. {user.lastName}.</Text>
                </View>
            </NativeBaseProvider>
        )
    }

    // return patient view if role is patient
    else if (userRoles.find(element => element == "P")) {
        return (
            <NativeBaseProvider>
                <View style={styles.container}>
                    <Text style={styles.header}>Hello, {user.firstName}.</Text>
                    <Text style={{alignSelf: 'center', position:'absolute'}}>
                        Full Name: {user.firstName} {user.lastName}{'\n'}
                        Email: {user.email}{'\n'}
                        Address: {user.address}{'\n'}
                        DoB: {user.DoB}{'\n'}
                        Sex: {user.sex}{'\n'}
                        Primary Care: {user.pcp}{'\n'}{'\n'}{'\n'}
                        {/* Available Doctors: {'\n'}{pcpList}{'\n'} */}
                    </Text>
                </View>
            </NativeBaseProvider>
        )
    }
    
    // return admin view if admin is any of the roles -- not implemented yet THIS SHOULD BE FIRST PRIORITY
    // else if (userRoles.find(element => element == "A")) console.log("ADMIN VIEW");
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    header: {
        paddingTop: 100,
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'flex-start',
    },
});
