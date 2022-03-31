import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Select, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Home() {
    const navigation = useNavigation();
    return (
        <View>
            <Text style={{paddingTop:200, paddingLeft:100, alignItems:'center', justifyContent:'center'}}>HELLO WELCOME HOME</Text>
        </View>
    )
}

export default () => {
    return (
        <NativeBaseProvider>

            <Home />
            
        </NativeBaseProvider>
    )
}