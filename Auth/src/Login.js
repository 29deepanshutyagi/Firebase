import React, { useState } from 'react';
import {View, Text,TouchableOpacity,TextInput,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {firebase } from '../config'

const Login = () => {
    const navigation=useNavigation()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    loginUser =async(email,password)=>
    {
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password)
        }catch(error){
            alert(error.message)
        }
    }
    return (
        <View style={styles.container}>
            <Text style={{fontWeight:'bold',fontsize:26}}>
                Login
            </Text>
            <View style={{marginTop:40}}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Email"
                  onChangeText={(text)=>setEmail(email)}
                  autoCaptalize='none'
                  autoCorrect={false}
                  secureTextEntry={true}
                  />
            </View>
            <TouchableOpacity
               onPress={()=>loginUser(email,password)}
               style={styles.button}
>               <Text style={{fontWeight:'bold',fontSize:22}}>Login</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  onPress={()=>navigation.navigate('Registration')}
                  style={{marginTop:20}}>
                    <Text style={{fontWeight:'bold',fontsize:16}}>
                        Do n't have an account?Register Now
                    </Text>
                  </TouchableOpacity>

        </View>
    )
}



export default Login
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignitems:'center',
        marginTop:100,

    },
    textInput:{
        paddingTop:20,
        paddingBottom:10,
        width:400,
        fontsize:20,
        borderBottomWidth:1,
        borderBottomColor:'#000',
        marginBottom:10,
        textAlign:'center'

    },
    button:{
        marginTOp:50,
        height:70,
        width:250,
        backgroundColor:'#026efd',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    }

})