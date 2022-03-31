import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Input, NativeBaseProvider } from 'native-base';

export default function Home({ route, navigation }) {
    const user = route.params
    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <Text style={styles.header}>Hello, {user.firstName}.</Text>
            </View>
        </NativeBaseProvider>
    )
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
