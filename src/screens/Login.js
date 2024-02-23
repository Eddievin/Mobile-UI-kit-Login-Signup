import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Signup = () => {
    return (
        <View style={styles.container}>
        <Text>SignUp</Text>

        <TouchableOpacity style={styles.btn}>
        <Text>CONTINUE</Text>
        </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    }
})


export default Signup;
