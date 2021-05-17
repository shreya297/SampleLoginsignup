import React, {useEffect} from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';

export default function AuthLoading(props){

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {            
            props.navigation.navigate('Dashboard')
          } else {
            props.navigation.navigate('LoginScreen')
          }
        });
    },[]);
    

    return(
        <View style={{alignContent:'center', alignItems:'center'}}>
            <Text>
                Loading.....
            </Text>
        </View>
    )

}